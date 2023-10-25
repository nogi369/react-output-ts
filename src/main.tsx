import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from './Contexts/TodoContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router}></RouterProvider>
    </TodoProvider>
  </React.StrictMode>,
);
