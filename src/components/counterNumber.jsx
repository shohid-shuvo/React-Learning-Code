import React, { useContext } from "react"
import { counterContext } from "../Context/useContext"  // Corrected typo

const CounterNumber = () => {  // Changed to uppercase "CounterNumber"
  const sdl_counter = useContext(counterContext)
  return (
    <>
      <div>
        count= {sdl_counter}
      </div>
    </>
  )
}

export default CounterNumber
