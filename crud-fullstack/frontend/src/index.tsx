import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
} else {
  console.error('Root element not found');
}
