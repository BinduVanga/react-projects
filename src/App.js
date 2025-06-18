import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import HistoryList from './components/HistoryList';

function App() {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  //fetch api tods
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => {
        const updatedTasks = data.map(task => ({ ...task, createdAt: Date.now() }));
        setTodos(updatedTasks);
      });
  }, []);

  //Auto move completed tasks after 5 min
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const toMove = todos.filter(task => task.completed && now - task.createdAt >= 5 * 60 * 1000);
      if (toMove.length > 0) {
        setHistory(prev => [...prev, ...toMove]);
        setTodos(todos.filter(task => !toMove.includes(task)))
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [todos]);

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList todos={todos} setTodos={setTodos} />
      <HistoryList history={history} setHistory={setHistory} setTodos={setTodos}/>
    </div>
  );
}

export default App;
