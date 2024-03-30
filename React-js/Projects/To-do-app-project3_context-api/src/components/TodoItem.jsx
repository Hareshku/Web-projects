import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItem_Context } from "../Store/todo_app_store";
function TodoItem({todoName,duDate}){
  const {DeteletItems} = useContext(TodoItem_Context)
    return <div className="container">
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col-4">{duDate}</div>
  <div className="col-2"><button type="button" className="btn btn-danger myBtn" onClick={()=>DeteletItems(todoName)}><AiOutlineDelete /></button></div>
    </div>
    </div>
}

export default TodoItem;