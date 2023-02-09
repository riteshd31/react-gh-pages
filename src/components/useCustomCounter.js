import React from 'react'
import { useState } from 'react';

export default function useCustomCounter() {

  const[count,setCount]=useState(0);
const increment=()=>{

setCount(count+1);
};

return{

count,
increment
};

}