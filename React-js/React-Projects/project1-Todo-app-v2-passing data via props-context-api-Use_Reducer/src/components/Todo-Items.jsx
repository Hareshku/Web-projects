
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./TodoItems.module.css";
import Todo_Item from "./Todo-Item";
let Todo_Items=()=>{
  const {TodoItems} = useContext(TodoItemsContext);
  // console.log(Add_items);
  

  return( <div className={styles.itemsContainer}>
  {TodoItems.map(items=>(
  <Todo_Item key={items.Name} TodoName={items.Name} Tododudate={items.dudate}></Todo_Item>
  ))}
  </div>
  );
};

export default Todo_Items;