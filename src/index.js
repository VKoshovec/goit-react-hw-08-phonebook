import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

//route
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);