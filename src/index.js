import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store'; // Ensure you import the store correctly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}> {/* 'store' should be lowercase */}
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);