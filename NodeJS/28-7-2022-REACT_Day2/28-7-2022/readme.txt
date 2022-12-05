1) 
react -- library
React - Components
React - React,ReactDOM
React - JSX ( usage of UI & rendering logic together using external cdn file babel )
...

2) Why Components ??
Lets use your ui sectional area multiple time in web page ( reuse ).
all these sections are in isolation mode.

3) Why JSX??
We need to have UI Design and Javascript Syntax together. implement using babel
JSX == ejs template engine

4) Types of Components?
Functional
Class Component

5) Props ??
Incoming value to components which is in read only format
in Functional components use  props as a parameter
in Class components use  props through this object

///////////////////////////  28-7-2022//////////////////

1) rev . for class & function component

2) rev . props in class compo & func compo

3) event ? class in component
<button onClick={ ()=>{ this.myfunc() } }> enter </button>

class xyz extends React.Component{
    myfunc(){

    }
}

4) why ref variable ???
if you wanna have data from any DOM Element ( e.g textbox or p,div ) , use React.createRef()

class xyz extends React.Component{
    constructo(){
        super(); // it will allow ur parent const

        this.x1 = React.createRef();
    }
}

<input type="text" ref={this.x1} />

5) Integration of React & Node

after having your data from textbox through React.createRef();

use axios cdn & implement following:

axios
.post(NODE JS API , data From Text Box)
.then()
.catch()

Note: to avoid CORS error --> implemet cors middleware in Node js

6) How to set state variable??

constructor(){
    super();
    this.state = {
        user:'',age:''
    }
}

state variable must be an object

7) updateing state variable ?

this.setState({
     user:textbox value,age:textbox value
})

8) this.setState() ??? why

bcoz it will re render component.....