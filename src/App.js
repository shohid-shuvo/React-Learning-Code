import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import GetAxios from './GetAxios';
import CurrentTime from './components/CurrentTime';
import UpperCase from './components/UpperCase';
import Navber from './components/Navber';
import { counterContext } from './Context/useContext';


function App() {
  const [count, setCount] =  useState(0)
  return (
   <>
      <counterContext.Provider value={count}>
        <Navber />
      </counterContext.Provider> 
        <div className="container d-flex justify-content-end">
          <button onClick={() => setCount((count) => count + 1)}> Click to count</button>
        </div>

      <UpperCase />
      <CurrentTime />
      <GetAxios />

      {/* useContext */}

   </>
  );
}

export default App;
