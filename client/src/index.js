import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import HouseProvider from './providers/HouseProvider';
import FavsProvider from './providers/FavsProvider';
import ScoreProvider from './providers/ScoreProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HouseProvider>
          <FavsProvider>
            <ScoreProvider>
              <App />
            </ScoreProvider>
          </FavsProvider>
        </HouseProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
