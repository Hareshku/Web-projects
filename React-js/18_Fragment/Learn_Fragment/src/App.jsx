import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
// import "./App.css"
function App(){
  // let Fooditems= ["Apple", "Mango", "Banana","Orange","Gouva"];
  let [Fooditems, setFoodItems]= useState([
    "Apple",
    "Mango",
    "Banana",
  ]);
 
  

    // let textStateArr= useState('Enter your choise item');
    // let textToShow= textStateArr[0];
    // let setTextState= textStateArr[1];
    // console.log(`Enter value here ${textToShow}`);
    let [textToShow, setTextState]= useState();

// const onchange_Event=(event)=>{
const onKeyDown=(event)=>{

       if(event.key==='Enter'){
        let newFoodItem= event.target.value;
        event.target.value= '';
        let newItems= [...Fooditems, newFoodItem];
        
        setFoodItems(newItems);
        // console.log(event.target.value);
        // setTextState(event.target.value);
       }
        
    }
    
  return (
  <>
  
  <Container>
    <h1>Healthy Food</h1>
    {/* <FoodInput onchange_Event={onchange_Event}></FoodInput> */}
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    {/* <p>{textToShow}</p> */}
    <FoodItems foodItems={Fooditems}></FoodItems>
    <ErrorMsg foodItems={Fooditems}></ErrorMsg>
  </Container>
  
  <Container><p>this is the the way of passing the children in the components in the react this way we can reuse the code and reduce code redandency or repeatation</p></Container>
  </>
  )
}

export default  App;


{/* {message} */}

    {/* {foodItems.length===0 ? <h1>I am hungary
      </h1>:null} using ternary operator */}
      //  let foodItems=['Dal','Apple','Green Vagetables', 'Fresh Fruits','Milk'];
  // let foodItems=[];

  // if(foodItems.length==0)return <h3>I am still hungary</h3>   // using if else statement

  // let message=foodItems.length===0 ? <h1>I am hungary</h1>:null;