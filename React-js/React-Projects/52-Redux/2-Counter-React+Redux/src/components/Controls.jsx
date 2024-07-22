import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = ()=>{
  const Dispatch= useDispatch();

  const inputValue = useRef();
  const handleIncrement=()=>{
    Dispatch(
      {
        type:"INCREMENT",
      }
    );
  }

  const handleDecrement=()=>{
    Dispatch(
      {
        type:"DECREMENT",
      }
    );
  }

  const handleAdd=()=>{
  Dispatch(
    {
      type: "ADD",
      payLoad:{
        num:inputValue.current.value,
      }
    }
  );
  inputValue.current.value=" ";
  };

  const handleSubtract=()=>{
    Dispatch(
      {
        type: "SUB",
        payLoad:{
          num:inputValue.current.value,
        }
      }
    );
    inputValue.current.value=" ";
  }

  return (<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button onClick={handleDecrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">-1</button>
    <button onClick={handleIncrement} type="button" className="btn btn-success">+1</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input">
    <input ref={inputValue} className="input-field" type="text" name="" id="inputValue" placeholder="Enter number"/>
    <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
    <button onClick={handleSubtract} type="button" className="btn btn-danger">Substract</button></div>
  </>
  );
}

export default Controls;