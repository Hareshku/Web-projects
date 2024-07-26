import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems=()=>{
  
  const fetchStatus=useSelector((store)=>store.fetchStatus);
 const dispatch= useDispatch();
  useEffect(()=>{

    if(fetchStatus.fetchDone) return;

    const controler= new AbortController();
    const signal = controler.signal;

     dispatch(fetchStatusActions.markFetchingStarted());

     fetch('http://localhost:8080/items', {signal})
     .then(res => res.json())
     .then(({items})=>{
        dispatch(fetchStatusActions.markFetchingFinished());
       dispatch(itemsActions.addInitialItems(items[0]));
       dispatch(fetchStatusActions.markFetchDone());
      });
      return ()=>{
      }
    },[fetchStatus]);
  


  return<>
  </>
}

export default FetchItems;