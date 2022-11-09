import React from 'react'

const Cssinline = () => {
  const styles = {
    color: "green",
    border: "2px solid red",
    padding: "10px",
    width: "500px",
   borderRadius: "10px",
   textAlign: "center",
   fontSize: "30px"
  }
  return (
    <div>
      <h2 style={{color: "red"}}>this is heading</h2>
      <p style={{backgroundColor: "green"}}>this is paragraph1</p>
      <p style={{fontSize: "30px"}}>this is paragraph3</p>
      <p style={styles}>this is paragraph4</p>
    </div>
  )
}

export default Cssinline
