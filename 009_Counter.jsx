
import { useState } from 'react';

export const Counter= ()=>{

  let [counter, setCounter]= useState(0);
  let [message, setMessage]= useState('');

  useEffect(()=> document.title = `Ha hecho click ${counter} veces`)

  return(<div>
    <h1>Counter: {counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Click</button>
    <hr/>
    <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
    <button onClick={()=>alert(`El mensaje es: ${message}`)}>Save</button>
  </div>)

}