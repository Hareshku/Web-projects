import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header"
import Display from "./components/Display"
import Controls from "./components/Controls"
import Container from "./components/Container"

function App() { 
  
  return <center className="container">
 <Container>
  <Header></Header>
  <Display></Display>
  <Controls></Controls>
 </Container>
  </center>  
}

export default App
