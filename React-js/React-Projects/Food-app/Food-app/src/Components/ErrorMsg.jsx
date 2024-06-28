import styles from "./ErrorMsg.module.css";
let ErrorMsg=({fooditems})=>{
  return <>
  {fooditems.length==0 && <li className={styles.list}>List is empty</li>}
  </>
}
export default ErrorMsg;