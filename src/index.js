import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import serviceWorkerRegistration
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Set the basename to the subpath where your app is deployed */}
    <BrowserRouter basename="/ecomm_pwa">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Register the service worker for PWA functionality
serviceWorkerRegistration.register(); // Register the service worker

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
