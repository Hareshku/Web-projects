import styles from "./FoodInput.module.css";
const FoodInput=({handleKeyDown})=>{
    return <>
    <input type="text" placeholder="Enter your choise"  className={styles.inputItems} 
    // onChange={onchange_Event}
    onKeyDown={handleKeyDown}
/>
    </>
};

export default FoodInput;