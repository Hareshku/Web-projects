import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WellComMsg.module.css";
const WelComMsg=()=>{
  // const Add_items = useContext(TodoItemsContext);
  const {TodoItems} = useContext(TodoItemsContext);
return (TodoItems.length===0 && <p className={styles.welcome}>You Have finshed your whole work. Now enjoy your day!</p>);
}

export default WelComMsg;