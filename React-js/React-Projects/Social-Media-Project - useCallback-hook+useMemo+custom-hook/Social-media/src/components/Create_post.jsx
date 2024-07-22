import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const Create_Post=()=>{
  const {addPost} = useContext(PostList);

  const tittleElement = useRef();
  const discriptionElement=useRef();
  const tagElement = useRef();

  const handleOnsubmit=(event)=>{
  event.preventDefault();
  const title= tittleElement.current.value;
  const discription= discriptionElement.current.value;
  const hashtag= tagElement.current.value.split("  ");
  
  tittleElement.current.value=" ";
  discriptionElement.current.value=" ";
  tagElement.current.value=" ";
  

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      body: discription,
      tags: hashtag,
      /* other post data */
    })
  })
  .then(res => res.json())
  .then((post)=>{
    addPost(post);
  });
  

  }
  return(
    <>
    <form className="Create-post" onSubmit={handleOnsubmit}>
  <div className="mb-3">
    <label htmlFor="tittle" className="form-label">Tittle</label>
    <input type="text" ref={tittleElement} className="form-control" id="tittle" placeholder="What is in your mind...."/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Discription</label>
    <textarea rows="5" type="text" ref={discriptionElement} className="form-control" id="body" placeholder="Enter discription about the post"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tittle" className="form-label">Enter your hashtags here</label>
    <input type="text" ref={tagElement} className="form-control" id="tittle" placeholder="What is in your mind...."/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  );
}

export default Create_Post;