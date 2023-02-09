import React from 'react'
import { useState } from 'react';


export default function UseMemoExample() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    const increment=()=>{
        setFirst(first+1);
    }
    const decrement=()=>{
        setSecond(second-1);
    }
    const isEven=()=>{
        return first%2===0;
    }
  return (
    <div>
        {first}
        <button onClick={increment}>INCREAMENT</button>
       {isEven()?"Even":"odd"}
       <br></br>
        {second}
        <button onClick={decrement}>DECREAMENT</button>
    </div>
  )
}
