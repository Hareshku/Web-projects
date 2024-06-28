import App2 from "./App2";

function App(){

// dynanism
let value= "By sir pirshant";


  return(
  <div>
    {/* how to use the css. */}
     <h1 style={{'background-color': 'red'}}>
    hello this is react course {value}.
  </h1>
  <App2></App2>
  
  </div>
 
)}
export default App;
