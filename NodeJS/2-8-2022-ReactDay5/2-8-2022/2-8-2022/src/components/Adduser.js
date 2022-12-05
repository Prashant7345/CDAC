import React, { Component } from 'react'

import axios from 'axios';

export default class Adduser extends Component {

    constructor(){
        super();
        //https://reactjs.org/docs/refs-and-the-dom.html
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }

    myfunc(){
        console.log('test');
        console.log(this.x1);
        console.log(this.x2);

        var uname = this.x1.current.value;
        var uage = this.x2.current.value;

        axios.post(
            "http://localhost:4500/users",
            {username:uname , userage:uage}
        ).then(res=>{
            console.log('RES FromNode');
            console.log(res);
            // this.x3.current.innerHTML = 'User Added';
            this.x3.current.innerHTML = `
                User Name : ${uname} , 
                User Age : ${uage}
            `;
        });
    }
  render() {
    return (
      <div className='container'>
        <h1>Add user To DB</h1>
        <input type="" ref={this.x1} /> <br />
        <input type="" ref={this.x2} /> <br />
        <button onClick={()=>{ this.myfunc() }}>Enter</button>
        <p ref={this.x3}></p>
      </div>
    )
  }
}
