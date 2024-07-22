import Post from "./Post"
// import {PostList as PostListData} from "../store/Post-list-store";
// import { useContext} from "react";
import WellComeMsg from "./WellComMsg";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{
  const postList = useLoaderData();
// const { postList} = useContext(PostListData);
  return ( 
  <>
  {postList.length === 0 && <WellComeMsg></WellComeMsg>}
  { postList.map((post)=>(
    <Post key={post.id} post={post}/>)
  )}
  
  </>
  )
}


export const postLoader= ()=>{
  return fetch('//dummyjson.com/posts')
  .then(res => res.json())
  .then(data=>{
  return data.posts;
   });
}

export default PostList;


// import { useContext, useEffect, useState } from "react";
// import Post from "./Post";
// // import { PostList as PostListData } from "../store/post-list-store";
// import WelcomeMessage from "./WellComMsg";
// import { useLoaderData } from "react-router-dom";

// const PostList = () => {
//   const postList = useLoaderData();

//   return (
//     <>
//       {postList.length === 0 && <WelcomeMessage />}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export const postLoader = () => {
//   return fetch("https://dummyjson.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       return data.posts;
//     });
// };

// export default PostList;