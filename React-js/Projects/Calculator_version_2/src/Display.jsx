import styles from './Display.module.css'
const Display=({displayCalVal})=>{

    return <input className={styles.display} type="text" value={displayCalVal} readOnly/>
};

export default Display;