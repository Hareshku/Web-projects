import styles from "./Add-Items.module.css";
const Add_Items=({onKeyDown})=>{
return <>
<input className={styles['Add_Items']} type="text" name="" id="" onKeyDown={onKeyDown} placeholder="Enter your choise"/>
</>
}

export default Add_Items;