import { createContext } from "react";
export const TodoItem_Context= createContext({
    todoItems: [],
      AddNewItem: ()=>{},
      DeteletItems: ()=>{},
});