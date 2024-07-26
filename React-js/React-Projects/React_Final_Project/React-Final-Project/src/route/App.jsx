import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from "../components/fetchItems"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const fetchStatus=useSelector((store)=>store.fetchStatus);
  return (
    <>
    <Header></Header>
    <FetchItems></FetchItems>
    {fetchStatus.crruentlyFetching ? <LoadingSpinner/>:<Outlet/>}
    <Footer></Footer>
    </>
  )
}

export default App
