import { act, createContext, useReducer } from "react";

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

  const addPost=(tittle, discription,hashtag)=>{
    dispatchPostList({
      type: "ADD_POST",
      payLoad: {
        id: Date.now(),
        tittle: tittle,
        body: discription,
        tags:hashtag,
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