import React from 'react'

const Destructuring = (props) => {
    const {name,heroName} = props
  return (
    <div>
      <h1>
        Hello {name} and {heroName}
      </h1>
    </div>
  )
}

export default Destructuring
