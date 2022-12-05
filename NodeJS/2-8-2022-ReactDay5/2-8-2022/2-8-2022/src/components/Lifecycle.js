import React, { Component } from 'react'

export default class Lifecycle extends Component {

    //Will be called only once at 1st place
    constructor(){
        super();
        console.log('CONST');
        
        this.state = {
            count:0
        }
    }

    ////Will be called only once after 1st render
    componentDidMount(){
        console.log('DID MOUNT');
    }

    //Will be called once you leave this(current) component
    componentWillUnmount(){
        console.log('WILL UNMOUNT');
    }
    //Will be called if there is change in state variable
    componentDidUpdate(){
        console.log('DID UPDATE');
    }

    myfunc(){
        this.setState({
            count:Math.random()
        })
    }

    ////Will be called if there is change in state variable
  render() {
    
    console.log('RENDER' , this.state.count);

    return (
      <div className='container'>
        <h1>Life Cycle Concepts </h1>
         
        <button onClick={()=>{ this.myfunc() }}>Enter</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
