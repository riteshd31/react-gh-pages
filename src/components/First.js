import React, { createContext } from 'react'
import Second from './Second';
const Firstname=createContext();
const Lastname=createContext();


export default function First() {
   
    
  return (
    <div>
        <Firstname.Provider value="Sagar">
          <Lastname.Provider value="chauhan">
           <Second/>

          </Lastname.Provider>

          
        </Firstname.Provider>
    </div>
  )
}
export {Firstname, Lastname};