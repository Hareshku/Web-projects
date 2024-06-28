import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext([{
  TodoItems:[],
  AddNewItems:()=>{},
  DeleteItems:()=>{},
  }]);

   // Reducer Method 
const todoItemsReducer = (currentItems, action)=>{
  let NewItems= currentItems;
  if(action.type==="NEW_ITEM"){
    NewItems=[...currentItems,
      {Name:action.payload.ItemName,
       dudate:action.payload.duDate,
    },
  ];
  }
  else if(action.type=== "DELETE_ITEM"){
     NewItems=currentItems.filter((item)=>item.Name!==action.payload.ItemName);
  }
  return NewItems;
}

  const TodoItemsContextProvider=({children})=>{
const [TodoItems, DispatchTodoItems]=useReducer(todoItemsReducer, []);

  const AddNewItems=(ItemName,duDate)=>{
   const newItemAction ={
     type: "NEW_ITEM",
     payload: {
       ItemName,
       duDate,
     },
   };

   DispatchTodoItems(newItemAction);
  };


  const DeleteItems=(todoItemName)=>{
    const NewItems=TodoItems.filter((item)=>item.Name!==todoItemName);
    const deleteActionItem ={
     type: "DELETE_ITEM",
     payload: {
       ItemName:todoItemName,
     },
   };
   DispatchTodoItems(deleteActionItem);
    };
    return(
    <TodoItemsContext.Provider value={{
      TodoItems,
      AddNewItems,
      DeleteItems,
      }}> 
      {children}
  </TodoItemsContext.Provider>
    );
  }

  export default TodoItemsContextProvider;