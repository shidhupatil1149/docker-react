import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from sc
        </a>
        <h1>Current {val}</h1>
        <button onClick={()=>setVal(val+1)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
