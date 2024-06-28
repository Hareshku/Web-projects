import App_name from "./components/App-name";
import Todo_input from "./components/AddTodo";
import Todo_Items from "./components/Todo-Items";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelComMsg from "./components/WellComMsg";
import  TodoItemsContextProvider from "./store/todo-items-store";

  function App(){
  return(
    <TodoItemsContextProvider>
    <center className="todo-container">
   <App_name/>
   <Todo_input />
   <WelComMsg ></WelComMsg>
   <Todo_Items ></Todo_Items>
  </center>
  </TodoItemsContextProvider>
  )
}

export default App;
