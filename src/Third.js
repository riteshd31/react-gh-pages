import React, { useContext } from 'react'
import { Firstname, Lastname } from './components/First';



export default function Third() {
    const x=useContext(Firstname);
    const y=useContext(Lastname);
  return (
    <div>Firstname is {x}
    <br/>
    lastname is {y}
    </div>

  )
}
