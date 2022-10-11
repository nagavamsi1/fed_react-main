import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
    
   
  
    <p>The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.</p>

The concept of a constructor is the same in React. 
The constructor in a React component is called before the component is mounted.
 When you implement the constructor for a React component, you need to call super props method before any other statement.
  If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.
     <br></br>

     <h2>Syntax</h2>
     <p><pre>{`Constructor(props){  
     super(props);  
}`}</pre></p>
   
<br></br>
In React, constructors are mainly used for two purposes:

It used for initializing the local state of the component by assigning an object to this.state.
It used for binding event handler methods that occur in your component.

<br></br>

You cannot call setState() method directly in the constructor(). If the component needs to use local state, you need directly to use 'this.state' to assign the initial state in the constructor. The constructor only uses this.state to assign initial state, and all other methods need to use set.state() method.
<br></br>

<h3>EXAMPLE</h3>
<p><pre>
  {`class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
`}</pre>
</p>

<h3>OUTPUT</h3>
<p style={{color: "green"}}>I am a green Car!</p>

<br></br>
<h2>ADDITIONAL INFORMATION</h2>
<p><b>1. Is it necessary to have a constructor in every component?</b></p>

No, it is not necessary to have a constructor in every component. If the component is not complex, it simply returns a node.

<p><pre>{`class App extends Component {  
    render () {  
        return (  
            <p> Name: { this.props.name }</p>  
        );  
    }  
}  
`}</pre></p>

<p><b>2. Is it necessary to call super() inside a constructor?</b></p>

Yes, it is necessary to call super() inside a constructor. If you need to set a property or access 'this' inside the constructor in your component, you need to call super().

<p><pre>{`
class App extends Component {  
    constructor(props){  
        this.fName = "Jhon"; // 'this' is not allowed before super()  
    }  
    render () {  
        return (  
            <p> Name: { this.props.name }</p>  
        );  
    }  
 `}</pre></p> 

When you run the above code, you get an error saying 'this' is not allowed before super(). So if you need to access the props inside the constructor, you need to call super(props).
<br></br>
<br></br>
  </div>
    <Sidebar />
    </div>
    )
};


export default Main;
