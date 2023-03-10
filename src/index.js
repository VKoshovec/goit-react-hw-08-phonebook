import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

//route
import { BrowserRouter } from "react-router-dom";
import AuthLayout from 'components/Authlayout/Authlayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading = { null} persistor = { persistor }>  
        <AuthLayout>
           <BrowserRouter basename='/goit-react-hw-08-phonebook'>
              <App />
           </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);