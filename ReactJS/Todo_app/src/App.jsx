import React, { useEffect, useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import ShowInstructions from './components/ShowInstructions';
import Typography from '@material-ui/core/Typography';
import styles from "./App.module.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Typography variant="h1">
          React ToDo
        </Typography>
      </div>

      <div className={styles.content}>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ?
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
          : <ShowInstructions />
        }
      </div>
    </div>
  );
}

export default App;
