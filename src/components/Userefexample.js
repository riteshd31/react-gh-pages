import React from 'react'
import { useRef } from 'react';

export default function useRefexample() {
    const inputRef=useRef();

    function handleRef()
    {
        console.log(inputRef);
        inputRef.current.focus();
        // inputRef.current.value="React";
        console.log("Entered value is ",inputRef.current.value);
        // inputRef.current.style.display="none";
        inputRef.current.style.color="red";

    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleRef}>Click for ref</button>
    </div>
  )
}
