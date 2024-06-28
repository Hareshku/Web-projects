import styles from "./Items.module.css";
let Items=({FoodItems, onKeyDown, onDeleteClicked, bought,HandleBuyButton})=>{
  return<>
  {/* <li className>{FoodItems}</li> */}
  <li className={`${styles['Items']} list-group-item ${bought&& 'active'}`} >{FoodItems}
  <button type="button" className={`${styles['buy-btn']} btn btn-danger`} onClick={()=>onDeleteClicked(FoodItems)}>Remove</button>
  <button type="button" className={`${styles['buy-btn']} btn btn-info`} onClick={() => {
          HandleBuyButton();
          onKeyDown();
        }}>Buy</button>

  </li>
  
  </>
}

export default Items;