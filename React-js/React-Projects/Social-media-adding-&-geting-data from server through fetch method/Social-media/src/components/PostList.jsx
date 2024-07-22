import Post from "./Post"
import {PostList as PostListData} from "../store/Post-list-store";
import { useContext} from "react";
import WellComeMsg from "./WellComMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{
const { postList, fetching } = useContext(PostListData);
  return <>
  {fetching && <LoadingSpinner/>}
  {!fetching && postList.length === 0 && <WellComeMsg></WellComeMsg>}
  {!fetching && postList.map((post)=><Post key={post.id} post={post}/>)}
  
  </>
}

export default PostList;