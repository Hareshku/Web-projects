import styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem";
const TodoItems=({todoItems, onDeleteClicked})=>{
    return (
        <div
 className={`${styles['items-container']}`}>
    {todoItems.map((item, index)=>(
       
        <TodoItem key={index} todoName={item.name} duDate={item.duDate}  asDeleteClicked={onDeleteClicked}></TodoItem> 
        
    ))}
</div>
);
}

export default TodoItems;