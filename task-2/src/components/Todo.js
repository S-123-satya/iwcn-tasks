// Todo.js
import React, { useState } from "react";
import classes from "./Todo.module.css";
import DeleteIcon from "./DeleteButton";

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div className={classes.todo}>
      <p>{todo.text}</p>
      <span>{todo.created_at}</span>
      <DeleteIcon onClick={() => removeTodo(index)}>Delete</DeleteIcon>
    </div>
  );
};

export default Todo;
