import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import TodoAdd from "./components/todoAdd";
import TodoItems from "./components/TodoItems";
import "./App.css"
import { useState } from "react";
import Welcome from "./components/WellcomMsg"
function App() {
//   const initial_Items= [
//     {
//   name: "Buy Milk",
//   duDate: "2-4-2024",
//   },

//   {
//   name:"Play Cricket",
//   duDate: "4-5-2024",
//   },
//   {
//   name: "Learn React",
//   duDate: "9-3-2024",
//   },
// ]


 const [todo_Items, setTodoItems]= useState([
  {
    name: "Buy Milk",
    duDate: "2-4-2024",
    },
  
    {
    name:"Play Cricket",
    duDate: "4-5-2024",
    },
 ]);

 const handleNewItem=(itemName, itemduDate)=>{
  // console.log(`new Item ${itemName} and ${itemduDate} added`);
  const newToDoTask=[...todo_Items, {
  name: itemName,
  duDate: itemduDate,
  }]

  setTodoItems(newToDoTask);
 }

 const handleOnDelete=(todoItemName)=>{
 const newToDoItems= todo_Items.filter((items)=>items.name!==todoItemName);
 setTodoItems(newToDoItems);
 }
 return <center className="todo-container">
  <AppName></AppName>
  <TodoAdd onNewItem={handleNewItem}></TodoAdd>
   {todo_Items.length===0 && <Welcome></Welcome>}
  <TodoItems todoItems={todo_Items} onDeleteClick={handleOnDelete}></TodoItems>
 
 </center>
}

export default App;
