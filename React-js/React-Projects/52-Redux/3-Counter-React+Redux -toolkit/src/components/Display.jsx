import { useSelector } from "react-redux";

const Display = ()=>{

  const {counterVal}=  useSelector((store)=>store.counter);
  return(
    <p className="lead mb-4">Current Value:{counterVal}</p>
  );
}

export default Display;