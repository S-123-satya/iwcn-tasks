// TodoForm.js
import React, { useState } from 'react';
import classes from './TodoForm.module.css' ;
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
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
