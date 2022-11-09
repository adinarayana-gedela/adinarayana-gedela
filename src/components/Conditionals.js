import React, { Component } from 'react'

export class Conditionals extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent: false
      }
    }
    
  render() {
    return this.state.parent ?(
     <h2>welcome to india</h2>
    ):(
        <h2>welcome to pakistan</h2>
    )
  }
}

export default Conditionals
