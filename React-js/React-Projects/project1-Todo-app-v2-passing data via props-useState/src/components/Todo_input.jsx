import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
function Todo_input({HandleOnAdd}){
const [TodoName, setTodoName]=useState('');
const [TodoDate, setTodoDate]=useState('');

const OnChangeName=(event)=>{
  setTodoName(event.target.value);
  // console.log(event.target.value);
}

const OnChangeDate=(event)=>{
  setTodoDate(event.target.value);
}

const OnAddClicked=()=>{
  HandleOnAdd(TodoName,TodoDate);
  setTodoName("");
  setTodoDate(" ");
};

  return <div className="container text-center">
  <div className="row Todo_inputs">
    <div className="col-6"><input type="text" placeholder="Enter todo here" onChange={OnChangeName} value={TodoName}/></div>
    <div className="col-4"><input type="date" value={TodoDate} onChange={OnChangeDate}/></div>
    <div className="col-2"><button type="button" className="btn btn-success APP-buttons"  onClick={OnAddClicked}><IoIosAddCircle /></button></div>
  </div>

   </div>
}

export default Todo_input;