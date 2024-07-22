import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Create_Post from "./components/Create_post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";
const App=()=>{
  const [selectedTab, setSelectedTab]= useState("Create Post");
  return(<PostListProvider>
  <div className="app-container">
    <SideBar selectedTab = {selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  
  <div className="content">
    <Header></Header>
    {selectedTab === "Home"?(<PostList></PostList>):(<Create_Post></Create_Post>)}
    
    
    <Footer></Footer>
  </div>
  </div>
  </PostListProvider>
  );
}

export default App;