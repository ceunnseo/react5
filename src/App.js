import './App.css';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

function App() {
  const count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type : "INCREMENT", payload : {num:5}})
  }
  const decrease = () => {
    dispatch({type : "DECREASE", payload : {num:5}})
  }
  const login = () => {
    dispatch({type : "LOGIN", payload : {id : "eunseo", password : 1}})
  }
  return (
    <div className="App">
      <h1>{id}, {password}</h1>
      <div>{count}</div>
      <button onClick = {increase}>increase btn</button>
      <button onClick = {decrease}>decrease btn</button>
      <button onClick={login}>Login</button>
      <Box/>
      <GrandSonBox/>
    </div>
  );
}

export default App;
