import React, {useState,useEffect} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CleanUp from './CleanUp';

function App() {
  const [status,setStatus]=useState<string | number>("text");
  const [input,setinput]=useState("")
  const [counter,setCounter]=useState(0)
  const [display,setDisplay]=useState(true)

  useEffect(()=>{
    console.log("useEffect in App ivoked")
    document.title=`currnt value is ${counter}`
  },[counter]);


  const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setinput(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={()=>setStatus("newtext")}>button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler}/>
        <h4>{counter}</h4>
        <button onClick={()=> setCounter((preCounter)=>preCounter+1)}>Increment</button>
        {display && <CleanUp />}
        <button onClick={()=>setDisplay(!display)}>ToggleDisplay</button>
        

        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
