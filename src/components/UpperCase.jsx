import React, {  useState } from 'react'

function UpperCase() {

  const [upper, setUpper] = useState("");

    const convertText = ()=> {
        setUpper(upper.toUpperCase());
    };
    const onChangeHandaler = (event)=> {
        setUpper(event.target.value);
    }

  return (
    <div className='container py-4'>
      
        <h2>Text to Uppercase Converter</h2>
        <textarea className='w-100' value={upper} onChange={onChangeHandaler} name="" rows={5}  id=""></textarea>
        <button className='btn btn-success' onClick={convertText} >Click to Uppercase</button>
    </div>
  )
}

export default UpperCase
