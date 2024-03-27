import styles from './App.module.css'
import Display from './Display';
import Button_container from './Button_container';
import { useState } from 'react';
function App(){
  // this will save and set the current state of the system.
  const [calVal, setCalVal]= useState(" ");

  const onClickedButton=(button_Text)=> {
    if(button_Text==='C'){
     setCalVal('');
    }
    else if (button_Text== '='){
     const result = eval(calVal);
     setCalVal(result);
    }
    else{
      const newDisplayVal= calVal + button_Text;
    setCalVal(newDisplayVal);
    }
  };
  

  return <div className={styles.container}>
  <Display displayCalVal={calVal}></Display>
  <Button_container onClickedButton={onClickedButton}></Button_container>
   
  </div>
}

export default App;