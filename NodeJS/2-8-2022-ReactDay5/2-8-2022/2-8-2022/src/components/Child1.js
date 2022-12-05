import React, { Component } from 'react'
import Child2 from './Child2'

export default class Child1 extends Component {
  render() {
    return (
      <div className='border'>
        <h1>Child1 Compo </h1>
        <Child2 xyz={this.props.abc}/>
        {/* <Child1 abc={this.state.name} /> */}
      </div>
    )
  }
}
