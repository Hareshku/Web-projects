const ErrorMsg=({foodItems})=>{
return <>
 {foodItems.length==0 && <h3>FoodItem List is empty</h3>}
</>
}

export default ErrorMsg;