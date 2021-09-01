import React, { useState } from 'react';
import uuid from 'uuid';
import { TextField, Button } from "@material-ui/core";
import styles from './ToDoForm.module.css';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        label="What needs to be done ?"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
        className={styles.input}
      />
      <div className={styles.addtask}>
        <Button disabled={!todo.task} type="submit">Add Task</Button>
      </div>
    </form>
  );
}

export default TodoForm;
