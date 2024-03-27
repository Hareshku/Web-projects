import { useState } from "react";
import styles from "./todoAdd.module.css"
function todoAdd({onNewItem}){

  const [todoName, settodoName]= useState('');
  const [todoDate, settodoDate]= useState('');

  const handleNameChange=(event)=>{
   settodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
   settodoDate(event.target.value);
  }
   const onHandleAddButton =()=>{
    onNewItem(todoName, todoDate);
    settodoName(" ");
    settodoDate(" ");
   }

    return <div className="container text-center">
    <div className="row">
      <div className="col-5"><input value={todoName} className={`${styles['input']}`} type="text" placeholder="Enter to do here" onChange={handleNameChange}/></div>
      <div className="col-4"><input value={todoDate} className={`${styles['input']}`} type="date" onChange={handleDateChange} /></div>
      <div className="col-2"><button type="button" className="btn btn-success myBtn" onClick={onHandleAddButton}>ADD</button></div>
    </div>
    </div>
}

export default todoAdd;