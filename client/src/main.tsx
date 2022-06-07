import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TransactinProvider } from './context/TransactionContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TransactinProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactinProvider>
);
