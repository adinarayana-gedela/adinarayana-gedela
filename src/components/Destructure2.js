import React, { Component } from 'react'

export default class Destructure2 extends Component {
  render() {
    const {name,heroName} = this.props
    return (
      <div>
        <h2>
            hello {name} and {heroName}
        </h2>    
      </div>
    )
  }
}
