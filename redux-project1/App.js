import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,login } from './Actions/counter';


function App() {
  // let input=<input id="text1" type="text" placeholder='Enter startPoint'></input>
  // startPoint=document.getElementById("text1")
  const counter=useSelector((state)=>state.counter)
  const sign=useSelector((state1)=>state1.signin)
  const dispatch=useDispatch();

  const inc=()=>{
    dispatch(increment(val1))
  }
  const dec=()=>{
    dispatch(decrement(val1))
  }
  const signIn=()=>{
    dispatch(login())
  }
  const val1=document.getElementById("val")
  
  return (
    <div>
      <h1>Redux counter App</h1>
      <input id="val" type="text" placeholder='enter start point'></input>
       
      <h2>Counter:{counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <h2>Sign In Status :{sign}</h2>
      <button onClick={signIn}>Sign In</button>
      
    </div>
  );
}

export default App;
