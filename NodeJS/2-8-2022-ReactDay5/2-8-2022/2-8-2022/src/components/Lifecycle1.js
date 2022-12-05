import React from 'react';
import axios from 'axios';

class Lifecycle1 extends React.Component{
    constructor(){
        console.log('CONST');
        super();
        this.x1 = React.createRef();
        this.state = {
            catname:'',
            status:false,
            apidata:[]
        }
    }

    myfunc1(){
        // console.log('MOUSEMOVE' , Math.random())
    }

    myfunc2(){
        // console.log('get cat name from textbox');
        var textBox= this.x1.current.value;
        console.log(textBox);

        this.setState({
            status:true,
            catname:textBox
        });
    }

    componentDidMount(){
        console.log('DID MOUNT');
        document.body.addEventListener('mousemove' , this.myfunc1);

        axios
        .get('https://fakestoreapi.com/products')
        .then((res)=>{
            // console.log(res);
            console.log(res.data);
            this.setState({
                apidata:res.data
            })
        });
    }
    
    componentWillUnmount(){
        console.log('WILL UNMOUNT');
        document.body.removeEventListener('mousemove' , this.myfunc1);
    }

    componentDidUpdate(){

        if(this.state.status)
        {
            console.log('DID UPDATE');
            console.log(this.state.catname , this.state.catname1);
            var path =`https://fakestoreapi.com/products/category/${this.state.catname}`
            console.log(path);
            axios
            .get(path)
            .then(res=>{
                console.log(res.data);
                this.setState({
                    apidata:res.data,
                    status:false
                })
            })
        }
    }

    render(){
        console.log('RENDER');
        const API = this.state.apidata;
        return(
            <div className='container'>
                <h1> LIFE CYCLE EXAMPLE</h1>

                <input type="text" ref={this.x1} />
                <button onClick={()=>{ this.myfunc2() }}>Enter</button>
                <p>{this.state.catname}</p>

                <hr />

                <div className='row'>
                    {
                        API && API.map(obj=>
                            <div className='col-xl-3'>
                                <img src={obj.image} className='img-fluid'/>
                                <h2>{obj.title}</h2>
                            </div>    
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Lifecycle1;

// const-> render -> did mount cycle