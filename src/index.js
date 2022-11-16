import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './components/Contexts/searchContext';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
    <App />
    </SearchProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);


