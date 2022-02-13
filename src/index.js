import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import FortNiteApp from "./FortNiteApi/FortNiteApp";
ReactDOM.render(
  <React.StrictMode>
    <FortNiteApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
