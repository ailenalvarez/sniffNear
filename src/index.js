import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/styles.css';
import { SniffNearApp } from './SniffNearApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SniffNearApp />
    </BrowserRouter>
  </React.StrictMode>
);