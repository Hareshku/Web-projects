// import App_name from "./components/App-name";
// import Todo_input from "./components/Todo_input";
// import Todo_Item1 from "./components/Todo-Item1";
// import Todo_Item2 from "./components/Todo_Item2";
// import "./App.css";
// function App(){
//   return <center class="todo-container">
//    <App_name/>
//    <Todo_input/>
//    <Todo_Item1/>
//    <Todo_Item2></Todo_Item2>


   
//   </center>
// }

// export default App;




// Clock App
// import Heading from "./Clock_Heading";
// import Clock_Sologon from "./components/Clock-Sologon";
// import Current_Time from "./components/Current-time";
// let Pak_Clock=()=>{
//   return <center>
//  <Heading></Heading>
//  <Clock_Sologon></Clock_Sologon>
//  <Current_Time></Current_Time>
//   </center>
// }
// export default Pak_Clock;





// Fragment

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// let Fragment=()=>{
//   let FoodItems=["Apple","Mangeo","Banana","Orange","Grapes"];
//   // this is fragment {React.Fragment} can also be written as <>
//   return <> 
//   <h1>Food Items</h1>
//     <ul className="list-group">
//      {FoodItems.map(item=>(<li className="list-group-item">{item}</li>))} 
//     </ul>
//   </>
// }
// export default Fragment;





//conditional rendering

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// let Fragment=()=>{

// let FoodItems=[];
//   // let FoodItems=["Apple","Mangeo","Banana","Orange","Grapes"];
//   // this is fragment {React.Fragment} can also be written as <>

//   if(FoodItems.length==0){
//     return "list is empty"
//   }
//   return <> 
//   <h1>Food Items</h1>
//   {/* {FoodItems.length===0?<li>List is empty</li>: null} using ternery operators */}

//   {FoodItems.length==0 && <li>List is empty</li>} {/* using logical operator */}
//     <ul className="list-group">
//      {FoodItems.map(item=>(<li className="list-group-item">{item}</li>))} 
//     </ul>
//   </>
// }
// export default Fragment;





// Passing data via props 
import FoodItems from "./FoodApp_components/FoodItems";
import ErrorMsg from "./FoodApp_components/ErrorMsg";
let FoodApp=()=>{

  let foodItems=["Apple","Mangeo","Banana","Orange","Grapes"];
  return <center>
    <h1>Food Items</h1>
    <FoodItems fooditems={foodItems}></FoodItems>
    <ErrorMsg fooditems={foodItems}></ErrorMsg>
  </center>
}

export default FoodApp;