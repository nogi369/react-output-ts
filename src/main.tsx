import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoProvider } from './Contexts/TodoContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <h1>Hello World</h1>
    </TodoProvider>
  </React.StrictMode>
);
