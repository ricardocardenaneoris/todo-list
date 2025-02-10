import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoPage } from './pages/todo-page/TodoPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <TodoPage />
    </div>
  </React.StrictMode>
);
