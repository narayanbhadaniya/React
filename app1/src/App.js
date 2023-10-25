import React, { useState } from "react";

function App(props) {
  const [todos, setTodo] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    let newTodo = document.getElementById("addTodo").value;
    let newTodoObject = {
      id: new Date().getTime(),
      text: newTodo,
    };
    
    setTodo([...todos, newTodoObject]);
    document.getElementById("addTodo").value = "";
  }

  return (
    <div>
      <h1>ToDo list</h1>
      <form onSubmit={handleClick}>
        <input type="text" id="addTodo" />
        <button type="submit">Add To-do</button>
      </form>
      <div>
        {todos.map((tempTodo) => {
          return <div><h1>{tempTodo.text}</h1></div>;
        })}
      </div>
    </div>
  );
}
export default App;
