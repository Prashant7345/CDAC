import React, { Component } from 'react'

import axios from 'axios';

export default class Showuser extends Component {
    constructor(){
        console.log('CONST');
        super();
        this.state = {
            apidata:[]
        }
    }
    componentDidMount(){
        console.log('DID MOUNT CYCLE');
        axios
        .get('http://localhost:4500/users')
        .then(res=>{
            // console.log(res);
            console.log(res.data);
            this.setState({
                apidata:res.data
            })
        })
    }
  render() {
    // console.log(axios);
    console.log('RENDER');
    const APIVALUE = this.state.apidata;

    return (
      <div className='container'>
        <h1>Show user</h1>
        <div className='row'>
            {
                APIVALUE && APIVALUE.map(obj=>
                    <div className='col-xl-3 text-center border'>
                        <h1>{obj.username}</h1>
                        <p>{obj.userage}</p>
                    </div>    
                )
            }
        </div>
      </div>
    )
  }
}
