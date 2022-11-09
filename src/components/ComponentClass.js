import React, { Component } from 'react'

export class ComponentClass extends Component {
  render() {
    return (
      <div>
        <h2>
            hello {this.props.name} and {this.props.heroName}
        </h2>
        {this.props.children}
      </div>
    )
  }
}

export default ComponentClass
