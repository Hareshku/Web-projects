import Post from "./Post"
import {PostList as PostListData} from "../store/Post-list-store";
import { useContext, useEffect, useState } from "react";
import WellComeMsg from "./WellComMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{

  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState();
  useEffect(()=>{
  setFetching(true);
  const controler= new AbortController();
  const signal = controler.signal;

   fetch('//dummyjson.com/posts', {signal})
   .then(res => res.json())
   .then(data=>{
   addInitialPosts(data.posts)
   setFetching(false);
    });
    return ()=>{
      console.log("data cleaning");
      controler.abort();
    }
  },[]);
//   const handleGetPostsClicked=()=>{
//     // Could be GET or POST/PUT/PATCH/DELETE
// fetch('//dummyjson.com/posts')
// .then(res => res.json())
// .then(data=>{
//   addInitialPosts(data.posts)
// });

// /* { status: 'ok', method: 'GET' } */

//   }
  
  return <>
  {fetching && <LoadingSpinner/>}
  {!fetching && postList.length === 0 && <WellComeMsg></WellComeMsg>}
  {!fetching && postList.map((post)=><Post key={post.id} post={post}/>)}
  
  </>
}

export default PostList;