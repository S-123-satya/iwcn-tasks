// TodoForm.js
import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import { addNote, getNote } from "./api";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    const response = await addNote({text:value});
    const newData=await getNote(response.data.id);
    addTodo(newData.data[0]);
    setValue("");
  };

  return (
    <form className={classes.formstyle} onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
  );
};

export default TodoForm;
