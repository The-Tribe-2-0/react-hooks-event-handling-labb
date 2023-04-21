// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    const Focus=()=>{console.log('Good!');}
     const Blur =() => console.log('Hey! Eyes on me!');
  return (
    <div>EyesOnMe
        <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe