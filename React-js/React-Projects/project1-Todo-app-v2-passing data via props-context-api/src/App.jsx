import App_name from "./components/App-name";
import Todo_input from "./components/AddTodo";
import Todo_Items from "./components/Todo-Items";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./components/App.module.css";
import WelComMsg from "./components/WellComMsg";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
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

   const AddNewItems=(ItemName,duDate)=>{
    const NewTodoItems=[...TodoItems,
      {Name:ItemName,
       dudate:duDate,
    },
  ];
    setTodoItems(NewTodoItems);
   }
  
   const DeleteItems=(todoItemName)=>{
   const NewItems=TodoItems.filter((item)=>item.Name!==todoItemName);
   setTodoItems(NewItems);
  
   }
  return(
    <TodoItemsContext.Provider value={{
      TodoItems,
      AddNewItems,
      DeleteItems,
      }}> 

    <center className="todo-container">
   <App_name/>
   <Todo_input />
   <WelComMsg ></WelComMsg>
   <Todo_Items ></Todo_Items>
  </center>
  </TodoItemsContext.Provider>
  )
}

export default App;


