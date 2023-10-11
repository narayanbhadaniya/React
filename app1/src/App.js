import React from "react";
import "./App.css";

class InnerComponent extends React.Component{
  render(){
    return(
      <div>
        Inner Component is Here
      </div>
    )
  }
  componentWillUnmount(){
    console.log("Unmounting Inner Component")
  }

}


class App extends React.Component {
  state = { counter: 10 , importnnerComponent : <InnerComponent/> };
  constructor(props) {
    super(props)
    console.log("I am inside constructor")
  }

  
  counterIncrement = ()=>{
    this.setState({counter:this.state.counter+1})
    this.setState({innerComponent :<div>Unmounted</div>})
   
  }
  static getDerivedStateFromProps(){
    console.log("I am inside Derived State")
    return true
  }

  shouldComponentUpdate(){
    console.log("I am inside Should Component Update")
    return true;

  }
  //overridden render function
  render() {
    console.log("I am inside Render")
    console.log(this.props)
    return (
      <div>
        <button onClick={this.counterIncrement}>Click Me</button>
        <br/>
        Counter :{this.state.counter}
        <br/>
        <div>Component :{this.innerComponent}</div>
        
        
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("I am inside Get Snapshot Before Update")
    console.log("Previous State : "+ prevState)
    console.log("Previous Props : "+ prevProps)
    console.log("Props : "+ this.props)
    console.log("State : "+ this.state)
    return true

  }

  componentDidMount(){
    console.log("I am inside ComponentDid Mount")
    return true
    
  }
}

// function myComponent() {
//   return <h1>Hello My Component</h1>;
// }

// class MyClassComponent extends React.Component {
//   render() {
//     return <h1>Class Component</h1>;
//   }
// }

// function App(props) {
//   console.log(props.color);
//   console.log(props.size);
//   console.log(props.clickEvent);
//   return (
//     <div className="App">
//       <button onClick={props.clickEvent} >Click Me</button>
//     </div>
//   );
// }

//const classComponent = new MyClassComponent();

//const myComponent = () =>{
//return <h1>Hello</h1>
//}
//return myComponent();

//return classComponent.render();

//return React.createElement(
// "div",
// null,
// React.createElement("h1", null, "This is Heading")
//);
//}

export default App;

