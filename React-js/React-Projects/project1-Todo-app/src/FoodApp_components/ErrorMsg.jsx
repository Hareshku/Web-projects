let ErrorMsg=({fooditems})=>{
  return <>
  {fooditems.length==0 && <li>List is empty</li>}
  </>
}
export default ErrorMsg;