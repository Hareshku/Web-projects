import AppName from "./components/AppName"
import AppText from "./components/AppText";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
  return  <center>
    <AppName></AppName>
    <AppText></AppText>
    <CurrentTime></CurrentTime>
  </center>
}

export default App;


// app is painted two times because of react strict mode to check the issues and bugs in the app.