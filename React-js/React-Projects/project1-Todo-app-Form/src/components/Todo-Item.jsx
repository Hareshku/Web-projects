let Todo_Item=({TodoName, Tododudate, OnDeleteCkicked})=>{
  return  <div className="row app_items">
    <div className="col-6">{TodoName}</div>
    <div className="col-4">{Tododudate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger APP-buttons" onClick={()=>OnDeleteCkicked(TodoName)}>Delete</button></div>
  </div>
  
   
}

export default Todo_Item;