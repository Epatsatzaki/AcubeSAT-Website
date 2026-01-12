/**
 * SpaceDot Website
 *
 * Initial Architect & Lead Developer:
 * Evangelia Patsatzaki
 *
 * GitHub: https://github.com/Epatsatzaki
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)