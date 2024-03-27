import { BiSolidMessageAdd } from "react-icons/bi";
import { useRef } from "react";
import styles from "./todoAdd.module.css"
function todoAdd({onNewItemAdd}){
  const toDoNameElement = useRef();
  const todoDuDate =useRef();


 

  const handleAddButton=(event)=>{
    event.preventDefault();
    const      toDoName= toDoNameElement.current.value;
    const      toDodate= todoDuDate.current.value;
          toDoNameElement.current.value=' ';
          todoDuDate.current.value= '';
    onNewItemAdd(toDoName, toDodate)
    
  }
    return <div className="container text-center">
    <form className="row" onSubmit={handleAddButton}>
      <div className="col-5"><input ref={toDoNameElement} className={`${styles['input']}`} type="text" placeholder="Enter to do here"/></div>
      <div className="col-4"><input ref={todoDuDate} className={`${styles['input']}`} type="date"/></div>
      <div className="col-2"><button type="submit" className="btn btn-success myBtn" ><BiSolidMessageAdd /></button></div>
    </form>
    </div>
}

export default todoAdd;