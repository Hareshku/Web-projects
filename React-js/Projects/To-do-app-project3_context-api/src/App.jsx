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

  const onHandleItem=(todoName, tododuDate)=>{
    const newTodoItems= [...todoItems, {
      name: todoName,
      duDate: tododuDate,
    }]
    setTodoItems(newTodoItems);
  }


  const onHandleDelete= (toDoItemName)=>{
    const newTodoafterDelete= todoItems.filter((items)=>items.name!==toDoItemName);
    setTodoItems(newTodoafterDelete);
  }

  return (
  <TodoItem_Context.Provider>
  <center className="todo-container">
  <AppName></AppName>
  <TodoAdd onNewItemAdd={onHandleItem}></TodoAdd>
   <Inform todoItems={todoItems}></Inform>
  <TodoItems todoItems={todoItems}  onDeleteClicked={onHandleDelete}></TodoItems>
  
 </center>
 </TodoItem_Context.Provider>
)}

export default App;
