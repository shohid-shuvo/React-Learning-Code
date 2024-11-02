import React, { useState } from 'react';

function UpperCase() {
    const [upper, setUpper] = useState("");

    const convertText = () => {
        let text = upper.toUpperCase(); // SDL: Convert text to uppercase
        setUpper(text); // SDL: Update state with uppercase text
    };

    const onChangeHandler = (event) => { // SDL: Added event parameter
        setUpper(event.target.value); // SDL: Update state as user types
    };

    return (
        <div className='container py-4'>
            <h2>Text to Uppercase Converter</h2>
            <textarea
                className='w-100'
                value={upper}
                onChange={onChangeHandler} // SDL: Moved onChange to textarea
                rows={5}
            ></textarea>
            <button className='btn btn-success mt-2' onClick={convertText}> {/* SDL: Added onClick handler for button */}
                Click to Uppercase
            </button>
        </div>
    );
}

export default UpperCase;
