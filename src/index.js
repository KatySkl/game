import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/title/title-module.css';
import './components/playing-field/playing-field-module.css';
import './components/keyboard/keyboard-module.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
