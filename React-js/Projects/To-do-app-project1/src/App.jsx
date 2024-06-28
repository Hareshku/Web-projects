// import "bootstrap/dist/css/bootstrap.min.css"
// import AppName from "./components/AppName";
// import TodoAdd from "./components/todoAdd";
// import TodoItems from "./components/TodoItems";
// import "./App.css"
// function App() {
//   const Items= [
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
//  return <center className="todo-container">
//   <AppName></AppName>
//   <TodoAdd></TodoAdd>
//   <TodoItems todoItems={Items}></TodoItems>
 
//  </center>
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import TodoAdd from "./components/todoAdd";
import TodoItems from "./components/TodoItems";
import "./App.css"
function App() {
  // const [TodoAdd,setToDO()]= useStatenpm 
  const Items= [
    {
  name: "Buy Milk",
  duDate: "2-4-2024",
  },

  {
  name:"Play Cricket",
  duDate: "4-5-2024",
  },
  {
  name: "Learn React",
  duDate: "9-3-2024",
  },
]
 return <center className="todo-container">
  <AppName></AppName>
  <TodoAdd></TodoAdd>
  <TodoItems todoItems={Items}></TodoItems>
 
 </center>
}

export default App;
