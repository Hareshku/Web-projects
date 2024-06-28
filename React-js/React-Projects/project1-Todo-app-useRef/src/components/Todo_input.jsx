import { useState, useRef } from "react";

function Todo_input({HandleOnAdd}){
// const [TodoName, setTodoName]=useState();
// const [TodoDate, setTodoDate]=useState();

// useref is used to store the value in the variable
// while useState do not store the value as we refresh it asign new value
const todoName= useRef();
const TodoDate= useRef();

// const OnChangeName=(event)=>{
//   setTodoName(event.target.value);
//   // console.log(event.target.value);
// }

// const OnChangeDate=(event)=>{
//   setTodoDate(event.target.value);
// }

const OnAddClicked=(event)=>{
  event.preventDefault();
  const TodoName=todoName.current.value;
  const TododuDate= TodoDate.current.value;
  console.log(TodoName);
  HandleOnAdd(TodoName,TododuDate);
  TodoDate.current.value=" ";
  todoName.current.value=" ";

  // setTodoName("");
  // setTodoDate("");
};

  return <div className="container text-center">
  <form className="row Todo_inputs" onSubmit={OnAddClicked}>
    <div className="col-6"><input type="text" ref={todoName
    } placeholder="Enter todo here" /></div>
    <div className="col-4"><input type="date" ref={TodoDate}/></div>
    <div className="col-2"><button type="submit" className="btn btn-success APP-buttons" >ADD</button></div>
  </form>

   </div>
}

export default Todo_input;