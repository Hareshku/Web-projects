import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/App.jsx'
import './index.css'
import Bag from "./route/Bag.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import myntraStore from './store/index.js'
import Home from './route/Home.jsx'
import Men from './route/Men.jsx'
import Women from './route/Women.jsx'

const router = createBrowserRouter([
  { path: "/",element:<App/>, children:[
    {path: "/", element: <Home/>},
    {path: "/bag", element: <Bag/>},
    {path: "/men", element:<Men/>},
    {path: "/women", element: <Women></Women>}
  ],
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
