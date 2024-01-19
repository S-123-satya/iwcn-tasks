// App.js
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { deleteNote, getNotes } from "./components/api";

function App() {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = (text) => {
    console.log(text);
    const newTodos = [...todos, { ...text }];
    setTodos(newTodos);
  };
  useEffect(() => {
    async function fetch(){
      const response = await getNotes();
      setTodos([...response.data])
    }
    fetch();
  }, []);
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const newTodo=newTodos.filter(todo=>todo.id!==id)
    deleteNote(id);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <div className="todoform">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="main_todo">
        {todos.map((todo, index) => (
          <Todo key={todo.id} index={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
