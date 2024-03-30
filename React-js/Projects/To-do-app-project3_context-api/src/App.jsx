import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import TodoAdd from "./components/todoAdd";
import TodoItems from "./components/TodoItems";
import {TodoItem_Context} from "./Store/todo_app_store";
import "./App.css"
import { useState } from "react";
import Inform from "./components/InformMsg";
function App() {
  const [todoItems, setTodoItems]=useState([
     {
      name:"Play Cricket",
      duDate: "4-5-2024",
    },
    {
      name: "Learn React",
      duDate: "9-3-2024",
    },
  ]);

  const AddNewItem=(todoName, tododuDate)=>{
    const newTodoItems= [...todoItems, {
      name: todoName,
      duDate: tododuDate,
    }]
    setTodoItems(newTodoItems);
  }


  const DeleteItems= (toDoItemName)=>{
    const newTodoafterDelete= todoItems.filter((items)=>items.name!==toDoItemName);
    setTodoItems(newTodoafterDelete);
  }
  // const TodoItemsValue=[
  //   { name:"Haresh",
  //   duDate: "Today"}
  // ];

  return (
  <TodoItem_Context.Provider value={
    {
      todoItems:todoItems,
      AddNewItem: AddNewItem,
      DeteletItems: DeleteItems,
    }
  }>
  <center className="todo-container">
  <AppName></AppName>
  <TodoAdd ></TodoAdd>
   <Inform></Inform>
  <TodoItems></TodoItems>
  
 </center>
 </TodoItem_Context.Provider>
)}

export default App;
