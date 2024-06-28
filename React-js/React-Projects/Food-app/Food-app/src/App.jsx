import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Add_Items from "./Components/Add-Items";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
let FoodApp=()=>{
const [foodItems, setFoodItems]=useState(["Apple", "Orange", "Mango"]);
  
const onKeyDown=(event)=>{
  // console.log("buy button was clicked");
  if(event.key==='Enter'){
    let newItems= event.target.value;
    event.target.value='';
    let newItemsarray=[...foodItems,newItems];
    setFoodItems(newItemsarray);
  }
}

const onDeleteClicked=(ItemName)=>{
  const newItemsList=foodItems.filter((item)=>item!==ItemName);
  setFoodItems(newItemsList);
}

  return <center className="Parent">
    <h1>Food Items</h1>
    <Add_Items onKeyDown={onKeyDown}></Add_Items>
    <FoodItems fooditems={foodItems} onKeyDown={onKeyDown} onDeleteClicked={onDeleteClicked}></FoodItems>
    <ErrorMsg fooditems={foodItems}></ErrorMsg>
  </center>
}

export default FoodApp;