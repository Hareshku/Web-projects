import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './data/route/App.jsx'
import './index.css'
import Bag from "./data/route/Bag.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './data/route/Home.jsx'

const router = createBrowserRouter([
  { path: "/",element:<App/>, children:[
    {path: "/", element: <Home/>},
    {path: "/bag", element: <Bag/>},
  ],
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
