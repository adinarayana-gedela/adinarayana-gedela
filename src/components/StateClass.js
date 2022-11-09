import React, { Component } from 'react'

export class StateClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello world"
      }
    }
    changeMessage () {
        this.setState ({
            message: "entering the world"
        })
    }
    
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=> this.changeMessage()}>Click</button>
      </div>
    )
  }
}

export default StateClass
