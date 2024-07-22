import { createContext, useCallback, /*useMemo,*/ useReducer } from "react";

export const PostList = createContext({
postList:[],
AddPost:()=>{},
deletePost:()=>{},
});

const postListReducer=(currentPostList, action)=>{
  let newPostList=currentPostList;
  if(action.type==="DELETE_POST" ){
    newPostList=currentPostList.filter((post)=>post.id!==action.payLoad.postId);
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payLoad, ...currentPostList];
  }
  return newPostList;
}

const PostListProvider=({children})=>{
  const [postList, dispatchPostList]=useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost=(post)=>{
    dispatchPostList({
      type: "ADD_POST",
      payLoad:post,
      
    });   
  };

  const deletePost= useCallback((postId)=>{
    dispatchPostList({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  },[dispatchPostList]);

// UseMemo Hook is used when your are dealing with computational data and you don't want to repaint your data every time even if it doesn't change used for optimization techniques.

// let array=[1,8,4,9,3,5];
// const sortedArray= useMemo(()=>array.sort(), [array]);

  return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
  }}>
    {children}
  </PostList.Provider>
};

const DEFAULT_POST_LIST=[
{
id: "1",
tittle: "Going to Karachi",
body: "I am going to Karachi for my vacations. Hope to enjoy lot.",
reactions:2,
userId:"user-1",
tags:["vacations", "Karachi", "Enjoying"],
},
{
  id: "2",
  tittle: "Going abroad",
  body: "I am going to abroad for my better future. Hope will be succeseful in the future journey",
  reactions:20,
  userId:"user-2",
  tags:["Foreign", "Future", "better Future"],
  },
];

export default PostListProvider;