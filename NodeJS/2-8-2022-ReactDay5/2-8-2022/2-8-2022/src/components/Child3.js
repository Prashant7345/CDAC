import React, { Component } from 'react'

export default class Child3 extends Component {
  render() {
    return (
      <div className='border'>
        <h1>Child3 , {this.props.pqr}</h1>
        {/* <Child3 pqr={this.props.xyz} /> */}
      </div>
    )
  }
}
