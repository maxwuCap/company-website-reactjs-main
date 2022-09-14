import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routers } from "react-router-dom";
import Login from "./containers/Login";

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Route>
          <App/>
          <Route path="login" element={<Login />} />
        </Route>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

