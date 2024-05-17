import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
 import router from './routes';
 import {RouterProvider} from'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<RouterProvider router={router}/> }
    {/* <App/> */}
  </React.StrictMode>
);


reportWebVitals();
