import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/homepage.css';
import {store} from './Api/store.jsx';
import {Provider} from "react-redux";
// import './index.css';
import {BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer/>
      
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
