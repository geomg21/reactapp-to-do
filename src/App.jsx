import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, clearCompleted } from './redux/todoSlice';
import './App.css'; // Import the CSS file

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="app-container">
      <h1 className="heading text-center mb-4">Organize Your Tasks, Conquer Your Day!</h1> {/* Updated heading */}
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          className="form-control todo-input"
          aria-label="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="btn btn-primary ms-2 todo-btn"
          aria-label="Add Todo"
        >
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo-item"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className={`btn ms-2 ${todo.completed ? 'btn-warning' : 'btn-success'}`}
                aria-label={todo.completed ? 'Undo' : 'Complete Todo'}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="btn btn-danger ms-2"
                aria-label="Delete Todo"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button 
        onClick={handleClearCompleted}
        className="btn btn-danger ms-2"
        aria-label="Clear Completed Todos"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;








