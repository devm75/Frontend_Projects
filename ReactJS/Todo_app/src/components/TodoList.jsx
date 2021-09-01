import React from 'react';
import Todo from './Todo';
import { List } from "@material-ui/core";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </List>
  )
}

export default TodoList;
