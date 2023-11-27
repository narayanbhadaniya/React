import './App.css';

import './App.css';
import React from 'react';

// feature branch code

//Child Component
class InnerComponent extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  sendData=()=>
  {
    const text = document.getElementById("textMessage").value
    console.log("Data to send to parent is: "+text)
    this.props.parentCallBack(text)
  }

  render()
  {
    return (
      <div>
        <input type='Text' placeholder='Enter message for parent' id="textMessage"/>
        <button onClick={()=>this.sendData()}>Send to parent</button>
      </div>
    )
  }
}

//parent component
class App extends React.Component
{
  state = {message:"This is from Parent"}

  parentCallbackFunction = (text) =>
  {
    console.log("Data in parent: "+text)
    this.setState({message: text})
  }

  render()
  {
    return (
    <div>
      <InnerComponent parentCallBack={this.parentCallbackFunction}/>
      <div>Data From Child:{this.state.message}</div>
    </div>
    )
  }
}

export default App;
