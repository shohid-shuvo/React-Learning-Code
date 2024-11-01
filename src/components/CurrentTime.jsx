// import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'


function CurrentTime() {
    
    const [currentTime, setCurrentTime] =  useState(new Date().toLocaleTimeString());
            
    useEffect(()=>{
        // const intTime = setInterval(() => {
        //     setCurrentTime(new Date().toLocaleTimeString());
        // }, 1000);
        // return ()=> clearInterval(intTime)

        async function realTime() {
            setInterval(() => {
                    setCurrentTime(new Date().toLocaleTimeString());
                }, 1000);
        }
        realTime();
    }, [])
  return (
    <>
        <div className='position-fixed top-0 end-0'>
            Time: {currentTime}
        </div>
    </>
  )
}

export default CurrentTime
