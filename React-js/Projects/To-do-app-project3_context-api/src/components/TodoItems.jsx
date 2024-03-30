import styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem";
import { useContext, useState } from "react";
import {TodoItem_Context } from "../Store/todo_app_store";
const TodoItems=()=>{
    const {todoItems}= useContext(TodoItem_Context);
    return (
        <div
 className={`${styles['items-container']}`}>
    {todoItems.map((item, index)=>(
       
        <TodoItem key={index} todoName={item.name} duDate={item.duDate}></TodoItem> 
        
    ))}
</div>
);
}

export default TodoItems;