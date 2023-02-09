// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import First from './components/First';
import Userefexample from './components/Userefexample';
import UseMemoExample from './components/UseMemoExample';
import CustomHooks from './components/CustomHooks';

function App() {
  const [num, setNum]= useState(0);
  const [nums, setNums]= useState(0);
  useEffect(() => {
   alert("button is clicked");
  
    
  },[num])
  
  return (
    <div className="App">
      <div>
      {num}
      <br></br>
      <button onClick={(()=>
        {setNum(num+1);}
        // ()=>{
        //   alert("button is clicked");
        // }
        )}>Click</button>
      </div>
      <div>
      {nums}
      <br></br>
      <button onClick={(()=>
        {setNums(nums+1);}
        // ()=>{
        //   alert("button is clicked");
        // }
        )}>Click 2</button>
      </div>
      <div>
        {/* <First/> */}
        {/* <Userefexample/> */}
        {/* <UseMemoExample/> */}
        <CustomHooks/>
        
      </div>
    </div>
  );
}

export default App;
