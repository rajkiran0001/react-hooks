import React, { useState } from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </div>
      <button onClick={() => completeTodo(index)}>complete</button>
      <button onClick={() => deleteTodo(index)}>x</button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    if (!value) return;
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState([
    {
      text: "LEarn the courss",
      isCompleted: false,
    },
    {
      text: "LEarn the courss1",
      isCompleted: false,
    },
    {
      text: "LEarn the courss2",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);
  };
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
