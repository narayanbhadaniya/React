import React from "react";
import "./App.css";


class App extends React.Component{

  constructor(props){
    super(props)
  }

  //overridden render function
  render(){
    return <button onClick={this.props.clickEvent} >Click Me</button>
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
