import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'animate.css';
import 'aos/dist/aos.css';
import './custom.scss';

AOS.init();

/* Root container target */
const stecsAppContainer = document.getElementById("root");

const root = ReactDOMClient.createRoot(stecsAppContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
