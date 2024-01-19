// Todo.js
import React, { useState } from "react";
import classes from "./Todo.module.css";
import DeleteIcon from "./DeleteButton";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className={classes.todo}>
      <p>{todo.text}</p>
      <DeleteIcon onClick={() => removeTodo(index)}>Delete</DeleteIcon>
    </div>
  );
};

export default Todo;
