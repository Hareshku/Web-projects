import { createContext, useReducer , useState, useEffect} from "react";

export const PostList = createContext({
postList:[],
AddPost:()=>{},
// fetching:false,
deletePost:()=>{},
});

const postListReducer=(currentPostList, action)=>{
  let newPostList=currentPostList;
  if(action.type==="DELETE_POST" ){
    newPostList=currentPostList.filter((post)=>post.id!==action.payLoad.postId);
  }
  else if(action.type==="ADD_INITIAL_POSTS"){
    newPostList=action.payLoad.posts;
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payLoad, ...currentPostList];
  }
  return newPostList;
}

const PostListProvider=({children})=>{
  const [postList, dispatchPostList]=useReducer(postListReducer, []);
  const [fetching, setFetching] = useState();
  const addPost=(post)=>{
    dispatchPostList({
      type: "ADD_POST",
      payLoad:post,
    });   
  };

  const addInitialPosts=(posts)=>{
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payLoad: {
        posts,
      },
      
    });   
  };

  const deletePost=(postId)=>{
    dispatchPostList({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  };

  
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
    // return ()=>{
    //   controler.abort();
    // }
  },[]);



  return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
  }}>
    {children}
  </PostList.Provider>
};

// const DEFAULT_POST_LIST=[
// {
// id: "1",
// tittle: "Going to Karachi",
// body: "I am going to Karachi for my vacations. Hope to enjoy lot.",
// reactions:2,
// userId:"user-1",
// tags:["vacations", "Karachi", "Enjoying"],
// },
// {
//   id: "2",
//   tittle: "Going abroad",
//   body: "I am going to abroad for my better future. Hope will be succeseful in the future journey",
//   reactions:20,
//   userId:"user-2",
//   tags:["Foreign", "Future", "better Future"],
//   },
// ];

export default PostListProvider;



// import {
//   createContext,
//   useCallback,
//   useEffect,
//   useReducer,
//   useState,
// } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId
//     );
//   } else if (action.type === "ADD_INITIAL_POSTS") {
//     newPostList = action.payload.posts;
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post,
//     });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       type: "ADD_INITIAL_POSTS",
//       payload: {
//         posts,
//       },
//     });
//   };

//   const deletePost = useCallback(
//     (postId) => {
//       dispatchPostList({
//         type: "DELETE_POST",
//         payload: {
//           postId,
//         },
//       });
//     },
//     [dispatchPostList]
//   );

//   return (
//     <PostList.Provider value={{ postList, addPost, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;