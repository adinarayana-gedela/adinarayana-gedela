
import React, {useState} from 'react'

const StateExam1 = () => {
    const initialCount = 0
    const [state,setState] = useState(initialCount);
  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  )
}

export default StateExam1
