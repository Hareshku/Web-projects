import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import TodoAdd from "./components/todoAdd";
import TodoItems from "./components/TodoItems";
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
    // when you want to update the current value on the basis of the current value
    // const newTodoItems= [...todoItems, {
    //   name: todoName,
    //   duDate: tododuDate,
    // }]
    // setTodoItems(newTodoItems);

    //  when you wnat to update the current value on the basis of the previous value.
    setTodoItems((currValue)=>[...currValue, {name: todoName,
      duDate: tododuDate,}]);
  }


  const onHandleDelete= (toDoItemName)=>{
    const newTodoafterDelete= todoItems.filter((items)=>items.name!==toDoItemName);
    setTodoItems(newTodoafterDelete);
  }

  return <center className="todo-container">
  <AppName></AppName>
  <TodoAdd onNewItemAdd={onHandleItem}></TodoAdd>
   {todoItems.length===0 && <Inform></Inform>}
  <TodoItems todoItems={todoItems}  onDeleteClicked={onHandleDelete}></TodoItems>
 
 </center>
}

export default App;
