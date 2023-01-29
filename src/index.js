import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
 import './index.scss';
import Experience from './components/home/experience/experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
{/* <Experience/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
