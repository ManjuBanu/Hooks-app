import React from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import AppFunc from './AppFunc';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Register from './Register';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
    <AppFunc/>
    <Register/>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
