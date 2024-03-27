import styles from './Button_container.module.css'
const Button_container=({Button_value})=>{
    return <div className={styles.button_container}>
        {Button_value.map(ButtonName=><button className={styles.buttons}>{ButtonName}</button>)}
   </div>
};

export default Button_container;