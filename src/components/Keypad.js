// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    handleKey = (evt) => {
        console.log("Entering password...")
  }


   render() {
       return (
           <div>
            <label htmlFor ="thebest">
            My Xavier
            </label>
           <input
            
            type = "password"
            onKeyUp = {this.handleKey}
           >
           
           
           
           </input>
               
           </div>
       )
   }
}

export default Keypad
