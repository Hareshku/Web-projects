import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
let Todo_Item=({TodoName, Tododudate})=>{
  const {DeleteItems} = useContext(TodoItemsContext);
  return (
    <div className="container">
   <div className="row kg-row ">
    <div className="col-6">{TodoName}</div>
    <div className="col-4">{Tododudate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger kg-button Danger_Btn" onClick={()=>DeleteItems(TodoName)}><MdDelete /></button></div>
  </div>
  </div>
  );
}

export default Todo_Item;