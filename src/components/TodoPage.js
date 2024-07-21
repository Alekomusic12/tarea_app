// src/components/TodoPage.js
import React, { useState } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [theme, setTheme] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [filter, setFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (task && theme && assignedUser) {
      setTodos([...todos, { task, theme, assignedUser, completed: false, comments: [], id: todos.length + 1 }]);
      setTask('');
      setTheme('');
      setAssignedUser('');
    }
  };

  const editTodo = (index) => {
    const todo = todos[index];
    setTask(todo.task);
    setTheme(todo.theme);
    setAssignedUser(todo.assignedUser);
    setIsEditing(true);
    setCurrentTodo(index);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo, index) => 
      index === currentTodo ? { ...todo, task, theme, assignedUser } : todo
    );
    setTodos(updatedTodos);
    setTask('');
    setTheme('');
    setAssignedUser('');
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => todo.theme.includes(filter));

  return (
    <div lassName="table-title">
      <h2 >Agregar Lista de Tareas</h2>
      <div>
        <input 
          type="text" 
          placeholder="Tarea" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Tema" 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Usuario Asignado" 
          value={assignedUser} 
          onChange={(e) => setAssignedUser(e.target.value)} 
        />
        {isEditing ? (
          <button onClick={updateTodo}>Actualizar Tarea </button>
        ) : (
          <button onClick={addTodo}>Agregar Tarea</button>
        )}
      </div>
      <input 
        type="text" 
        placeholder="Filtrar por tema" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      < div lassName="table-title2">
      <table > 
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de la Tarea</th>
            <th>Tema</th>
            <th>Usuario Asignado</th>
            <th>Estado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>{todo.theme}</td>
              <td>{todo.assignedUser}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={() => toggleTodo(index)} 
                />
                {todo.completed ? 'Completado' : 'Pendiente'}
              </td>
              <td>
                <button onClick={() => editTodo(index)}>✏️</button>
              </td>
              <td>
                <button onClick={() => deleteTodo(index)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TodoPage;
