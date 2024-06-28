import Items from "./Items";
let FoodItems=({fooditems})=>{
  return <>
  <ul className="list-group">
     {fooditems.map(item=>(
      <Items key={item} FoodItems={item}></Items>
     ))} 
  </ul>
  </>
}
export default FoodItems;