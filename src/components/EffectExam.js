import React, {useState, useEffect } from 'react'


const EffectExam = () => {
  const [count,setCount] = useState("0");
  const [calculation,setCalculation] = useState("0");
     useEffect(() => {
      setCalculation(() => count * 2 )} ,[count])

  return (
    <div>
    <p>Count : {count}</p> 
    <button onClick={(c) => setCount(c + 1)}>Increment</button> 
    <p>Calculation : {calculation}</p>
    </div>
  )
}

export default EffectExam
