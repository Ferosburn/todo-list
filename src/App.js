import React, { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([]);
  const handleChange = (event)=> {
    setTodoItem(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, todoItem]);
    setTodoItem('');
    console.log(items)
  }
  return (
    <div>
      <form onSubmit={event=>handleSubmit(event)}>
        <input value={todoItem} onChange={event=>handleChange(event)}/>
        <button type="submit">Tambah</button>
      </form>
      <List items={items}/>
    </div>
  );
}

export default App;
