// import { useContext, useRef } from "react";
// import { PostList } from "../store/Post-list-store";
// import {useNavigate } from "react-router-dom";
import { Form, redirect } from "react-router-dom";

const Create_Post=()=>{
//   const {addPost} = useContext(PostList);
//   const navigate = useNavigate();

//   const tittleElement = useRef();
//   const discriptionElement=useRef();
//   const tagElement = useRef();

//   const handleOnsubmit=(event)=>{
//   event.preventDefault();
//   const title= tittleElement.current.value;
//   const discription= discriptionElement.current.value;
//   const hashtag= tagElement.current.value.split(" ");
  
//   tittleElement.current.value=" ";
//   discriptionElement.current.value=" ";
//   tagElement.current.value=" ";

//   fetch('https://dummyjson.com/posts/add',
//     {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: title,
//         body: discription,
//         reactions: 54,
//         userId: 5,
//         tags:hashtag,
//     })
//   })
//   .then(res => res.json())
//   .then((post)=>{
//     addPost(post);
//     navigate("/");
//   });
// }
  return(
    <>
    <Form method="POST" className="Create-post">
  <div className="mb-3">
    <label htmlFor="tittle" className="form-label">Tittle</label>
    <input type="text" name="title" className="form-control" id="tittle" placeholder="What is in your mind...."/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Discription</label>
    <textarea rows="5" type="text" name="body" className="form-control" id="body" placeholder="Enter discription about the post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Enter your hashtags here</label>
    <input type="text" name="reactions" className="form-control" id="reactions" placeholder="What is in your mind...."/>
  </div>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your hashtags here</label>
    <input type="text" name="userId" className="form-control" id="userId" placeholder="What is in your mind...."/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" name="tags" className="form-control" id="tags" placeholder="What is in your mind...."/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
    </>
  );
}

export async function CreatePosAction(data){
  const formData= await data.request.formData();
  const postData= Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);
   
   fetch('https://dummyjson.com/posts/add',
    {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
  .then((post)=>{
    // addPost(post);
console.log(post);
    // navigate("/");
  });


  return redirect("/");
}
export default Create_Post;