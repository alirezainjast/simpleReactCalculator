import React from 'react';
import './App.css';
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <h1 className="title">simpleReactCalculator</h1>
      <Calculator />
      <p className="sign">by <a href="https://alirezainjast.ir">alirezainjast</a></p>
    </div>
  );
}

export default App;
