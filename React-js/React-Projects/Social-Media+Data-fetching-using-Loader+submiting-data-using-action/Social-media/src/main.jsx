// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './routes/App.jsx'
// import PostList, {postLoader} from './components/PostList.jsx'
// import Create_Post from './components/Create_post.jsx';
// // import './index.css'
// const router = createBrowserRouter([
//   { 
//     path: "/",element:<App/>, children:[
//     {
//       path: "/",
//       element: <PostList/>,
//       Loader: postLoader},
//     {
//       path: "/create-Post",
//       element: <Create_Post/>

//     },
//   ],
// },
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { CreatePosAction } from "./components/Create_post.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: CreatePosAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
