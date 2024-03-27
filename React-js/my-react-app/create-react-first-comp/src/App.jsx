// import Default_Exp from "./Default_export";  // import code when it exported as default.
// import { Named_Exp} from "./Default_export"; // import the code when it exported as named exported.
// import { Named_Export} from "./Named_export"; // import the code when it exported as named exported.
// function app(){
//   return <div>
//     <h1>this is my react day one</h1>
//     <Default_Exp></Default_Exp>
//     <Named_Exp/>
//     <Named_Export></Named_Export>
//   </div>
// }

// export default app;




// Dynamic components.
// import Dyn from "./dynamic_component";
// function App(){
//   return <div>
//     <Dyn/>
//   </div>
// }
// export default App;



// Reuseable code.
import {Reuse} from "./Resueable_code";

function App(){
  return <div>
    <h1> This is reuseable code.</h1>
    <Reuse></Reuse>
    <Reuse></Reuse>
    <Reuse></Reuse>
    <Reuse></Reuse>
    <Reuse></Reuse>
  </div>
}

export default App;