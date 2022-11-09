import React, { Component } from 'react'

export class StateClass1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count: 0
      }
    }
    changeCount() {
        this.setState({
            Count: this.state.Count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h2>count {this.state.Count}</h2>
        <button onClick={()=>this.changeCount()}>Increment</button>
      </div>
    )
  }
}

export default StateClass1

