import { useContext } from "react";
import {TodoItem_Context } from "../Store/todo_app_store";
const Inform=()=>{
    const {todoItems}= useContext(TodoItem_Context);
    return todoItems.length===0 && <p>You have finished whole day work, <br /> Now enjoy your day!</p>
}

export default Inform;