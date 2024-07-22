import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './routes/App.jsx'
import PostList from './components/PostList.jsx'
import Create_Post from './components/Create_post.jsx';
// import './index.css'
const router = createBrowserRouter([
  { path: "/",element:<App/>, children:[
    {path: "/", element: <PostList/>},
    {path: "/create-Post", element: <Create_Post/>},
  ],
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
