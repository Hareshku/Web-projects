
import Todo_Item from "./Todo-Item";
let Todo_Items=({Add_items,OnDeleteCkicked})=>{
  return <>
  {Add_items.map(items=>(
  <Todo_Item key={items.Name} TodoName={items.Name} Tododudate={items.dudate} OnDeleteCkicked={OnDeleteCkicked}></Todo_Item>
  ))}
  </>
}

export default Todo_Items;