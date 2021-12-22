import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './Redux/AppContextProvider';
import {store} from "./Redux/Store";
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider Store={store}>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


