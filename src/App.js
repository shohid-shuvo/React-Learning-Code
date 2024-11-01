import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetAxios from './GetAxios';
import CurrentTime from './components/CurrentTime';
import UpperCase from './components/UpperCase';

function App() {
  return (
   <>
      <UpperCase />
      <CurrentTime />
      <GetAxios />
   </>
  );
}

export default App;
