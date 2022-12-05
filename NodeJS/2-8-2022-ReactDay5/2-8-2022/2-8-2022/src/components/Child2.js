import React, { Component } from 'react'
import Child3 from './Child3'

export default class Child2 extends Component {
  render() {
    return (
      <div className='border'>
        <h1>Child2 Component </h1>
        <Child3 pqr={this.props.xyz} />
        {/* <Child2 xyz={this.props.abc}/> */}
      </div>
    )
  }
}
