import styles from "./Item.module.css";
const Items=({items,bought, handleBuyButton })=>{

   const click=(event)=> {
      // 👇️ change background color
      event.target.style.backgroundColor = 'green';
    
      
    };
return <>
 <li onClick={click} className={`${styles['Items']} list-group-item ${bought && "active"}`}>
    <span  className={styles.Items_name}>{items}</span>
 <button onClick={handleBuyButton} className={`${styles.buy_button} btn btn-info`}>Buy</button>
 </li>
</>
}
export default Items;