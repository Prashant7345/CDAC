import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            name:"User X"
        }
    }
    myfunc(){
        this.setState({
            name:Math.random()
        })
    }
  render() {
    return (
      <div className='container border' >
            <h1>Parent Component</h1>
            <button onClick={()=>{ this.myfunc()} }>Enter</button>
            <Child1 abc={this.state.name} />
      </div>
    )
  }
}
