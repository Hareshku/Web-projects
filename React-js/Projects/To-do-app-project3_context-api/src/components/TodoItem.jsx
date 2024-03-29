import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({todoName,duDate, asDeleteClicked}){
    return <div className="container">
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col-4">{duDate}</div>
      <div className="col-2"><button type="button" className="btn btn-danger myBtn" onClick={()=>asDeleteClicked(todoName)}><AiOutlineDelete /></button></div>
    </div>
    </div>
}

export default TodoItem;