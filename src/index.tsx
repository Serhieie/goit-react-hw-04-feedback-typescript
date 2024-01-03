import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found in the document.');
}
