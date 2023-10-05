import React from 'react';
import './App.css';

function myComponent(){
  return <h1>Hello My Component</h1>
  }
class MyClassComponent extends React.Component{
  render(){
    return <h1>Class Component</h1>
  }
}

function App() {

const classComponent = new MyClassComponent();

  //const myComponent = () =>{
    //return <h1>Hello</h1>
  //}

  return classComponent.render();
  //return myComponent();

  return React.createElement(
    "div",
    null,
    React.createElement("h1",null,"This is Heading")
    
  );
}

export default App;
