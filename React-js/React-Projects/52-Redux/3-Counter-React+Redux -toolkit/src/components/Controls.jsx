import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/Privacy";


const Controls = ()=>{
  const dispatch= useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  // const handlePrivacyToggle = () => {
  //   dispatch(privacyActions.toggle());
  // };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle=()=>{
    dispatch(privacyActions.toggle());
  }


  return (<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button onClick={handleDecrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">-1</button>
    <button onClick={handleIncrement} type="button" className="btn btn-success">+1</button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input">
    <input ref={inputElement} className="input-field" type="text" name="" id="inputValue" placeholder="Enter number"/>
    <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
    <button onClick={handleSubtract} type="button" className="btn btn-danger">Substract</button></div>
  </>
  );
}

export default Controls;