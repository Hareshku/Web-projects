import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header"
import Display from "./components/Display"
import Controls from "./components/Controls"
import Container from "./components/Container"
import { useSelector } from "react-redux"
import PrivacyMessage from "./components/Privacy"


function App() { 
  const privacy = useSelector((store) => store.privacy);
  return <center className="container">
 <Container>
  <Header></Header>
  {privacy?<PrivacyMessage/>:<Display/>}
  
  <Controls></Controls>
 </Container>
  </center>  
}

export default App
