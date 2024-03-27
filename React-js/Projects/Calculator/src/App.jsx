import styles from './App.module.css'
import Display from './Display';
import Button_container from './Button_container';
function App(){

  const Button_value= ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".",  ]

  return <div className={styles.container}>
  <Display></Display>
  <Button_container Button_value={Button_value}></Button_container>
   
  </div>
}

export default App;