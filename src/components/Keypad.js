// Code Keypad Component Here
import React from 'react'

function Keypad() {
   const KeyClicked = ()=> {console.log('Entering password...');
   }
  return (
    <div>Keypad
        <input type={'password'} onChange={KeyClicked}></input>
    </div>
  )

  }
export default Keypad

  
