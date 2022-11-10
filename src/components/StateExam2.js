import React from 'react'
import react,{useState} from 'react';

const StateExam2 = () => {
    const [color,setColor] = useState("red");
  return (
    <div>
      <h2>Initial color is {color}</h2>
      <button onClick={() => setColor("blue")}>Click</button>
    </div>
  )
}

export default StateExam2
