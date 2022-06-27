import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Title } from "./components/title";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
