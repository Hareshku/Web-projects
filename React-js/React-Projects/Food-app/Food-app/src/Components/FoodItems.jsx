import { useState } from "react";
import Items from "./Items";
let FoodItems=({fooditems,onKeyDown,onDeleteClicked})=>{
let [activeItems, setActiveItems]=useState([]);
  const onBuybuttonClicked=(item, event)=>{
         let newItems=[...activeItems,item];
         setActiveItems(newItems);
  }
  return <>
  <ul className="list-group">
     {fooditems.map(item=>(
      <Items key={item} FoodItems={item} bought={activeItems.includes(item)} onKeyDown={onKeyDown} onDeleteClicked={onDeleteClicked} HandleBuyButton={(event)=>onBuybuttonClicked(item, event)}></Items>
      
     ))} 
     
  </ul>
  </>
}
export default FoodItems;