import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/Post-list-store";
import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
const Post=({post})=>{
  const {deletePost}=useContext(PostList);

  const [count, setCount] = useState(0);

  // Function to increase the value by one
  const increaseCount = () => {
    setCount(count + 1);
  };

  return(
    <>
    <div className="card post_card" style={{width: "30rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
    <MdDelete />
  </span></h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(<span key={tag} className="badge text-bg-primary hashTag"> {tag} </span>))}
    
    <div className="alert alert-success reactions" role="alert">
    Post reacted by {count} peoples
</div>
    <div className="like_btn" onClick={increaseCount} >
      <AiOutlineLike className="like"/>
       <FcLike className="like"/></div>
  </div>
</div>
    </>
  );
}

export default Post;
