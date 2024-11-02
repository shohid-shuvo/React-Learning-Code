import React from 'react';
import CounterNumber from './counterNumber';

const Button = () => {
  return (
    <>
    <div className='d-flex justify-content-center mt-3'>
      <button><span> <CounterNumber /> </span></button>
    </div>
    </>
  )
}

export default Button
