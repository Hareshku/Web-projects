import App_name from "./components/App-name";
import Todo_input from "./components/Todo_input";
import Todo_Items from "./components/Todo-Items";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./components/App.module.css";
import WelComMsg from "./components/WellComMsg";
import { useState } from "react";
function App(){
  const [TodoItems, setTodoItems]=useState([
    {
      Name:'Buy Milk',
      dudate: '3/4/2024',
    },
  {
      Name: 'Learn React',
      dudate: '28/5/2024',
  },]);

   const OnNewItemAdd=(ItemName,duDate)=>{
  //   const NewTodoItems=[...TodoItems,
  //     {Name:ItemName,
  //      dudate:duDate,
  //   },
  // ];
  // Update state from the previous state 
  // functional updates 
  // (existingpost)=>[...existingpost,postdata]
    setTodoItems((currValue)=>[...TodoItems,{Name:ItemName,
      dudate:duDate,}]);
   };
  
   const OnDeleteCkicked=(todoItemName)=>{
   const NewItems=TodoItems.filter((item)=>item.Name!==todoItemName);
   setTodoItems(NewItems);
  
   }
  return <center className={styles['todo-container']}>
   <App_name/>
   <Todo_input HandleOnAdd={OnNewItemAdd}/>
   {TodoItems.length==0 && <WelComMsg></WelComMsg>}
   <Todo_Items Add_items={TodoItems} OnDeleteCkicked={OnDeleteCkicked}></Todo_Items>
  </center>
}

export default App;


