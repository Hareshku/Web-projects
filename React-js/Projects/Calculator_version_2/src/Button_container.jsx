import styles from './Button_container.module.css'
const Button_container=({onClickedButton})=>{
    const Button_Names= ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".",  ]

    return <div className={styles.button_container}>
        {Button_Names.map(ButtonName=><button className={styles.buttons} onClick={()=>onClickedButton(ButtonName)} key={ButtonName}>{ButtonName}</button>)}
   </div>
};

export default Button_container;