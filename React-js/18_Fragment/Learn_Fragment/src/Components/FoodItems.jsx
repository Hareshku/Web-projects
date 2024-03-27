import { useState } from "react";
import Items from "./Items";
const FoodItems=({foodItems})=>{
   let [activeItems, setActiveItems]= useState([]);
   let onBuyButton=(item,event)=>{
      let newItems= [...activeItems, item];
      setActiveItems(newItems);
   }
return <>
 {foodItems.map((items)=>(
    <Items
     key={items}
     items={items}
     bought= {activeItems.includes(items)}
     handleBuyButton= {(event)=>onBuyButton(items,event)}
      // Item_Button={()=>console.log(`${items} button was clicked`)}
      >
         
      </Items> 
     ))}
</>
}

export default FoodItems;