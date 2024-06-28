import { useState } from "react";

function Todo_input({HandleOnAdd}){
const [TodoName, setTodoName]=useState();
const [TodoDate, setTodoDate]=useState();

const OnChangeName=(event)=>{
  setTodoName(event.target.value);
  // console.log(event.target.value);
}

const OnChangeDate=(event)=>{
  setTodoDate(event.target.value);
}

const OnAddClicked=(event)=>{
  event.preventDefault();
  HandleOnAdd(TodoName,TodoDate);
  setTodoName("");
  setTodoDate("");
};

  return <div className="container text-center">
  <form className="row Todo_inputs" onSubmit={OnAddClicked}>
    <div className="col-6"><input type="text" placeholder="Enter todo here" onChange={OnChangeName} value={TodoName}/></div>
    <div className="col-4"><input type="date" onChange={OnChangeDate}/></div>
    <div className="col-2"><button type="submit" className="btn btn-success APP-buttons" value={TodoDate}>ADD</button></div>
  </form>

   </div>
}

export default Todo_input;