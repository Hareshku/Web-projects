import { BiSolidMessageAdd } from "react-icons/bi";
import { useContext, useState } from "react";
import { TodoItem_Context } from "../Store/todo_app_store";
import styles from "./todoAdd.module.css"
function todoAdd(){
  const {AddNewItem}=useContext(TodoItem_Context)
  const [toDoName, setTodoName]= useState(' ');
  const [toDodate, setTodoDate]= useState(' ');

  const handleNameChange=(event)=>{
   setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
   setTodoDate(event.target.value);
  }

  const handleAddButton=()=>{
    AddNewItem(toDoName, toDodate)
    setTodoName(" ");
    setTodoDate(" ");
  }
    return <div className="container text-center">
    <div className="row">
      <div className="col-5"><input className={`${styles['input']}`} type="text" placeholder="Enter to do here" onChange={handleNameChange} value={toDoName}/></div>
      <div className="col-4"><input className={`${styles['input']}`} type="date" onChange={handleDateChange} value={toDodate}/></div>
      <div className="col-2"><button type="button" className="btn btn-success myBtn" onClick={handleAddButton}><BiSolidMessageAdd /></button></div>
    </div>
    </div>
}

export default todoAdd;