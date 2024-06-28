import styles from "./Items.module.css";
let Items=({FoodItems})=>{
  return<>
  <li className={`${styles['app_items']}`}>{FoodItems}</li>
  </>
}

export default Items;