import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, text) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, prompt('Edit Todo', todo.text))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
