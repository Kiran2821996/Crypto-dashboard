import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextPrimary } from "./components/ContextPrimary";
import { ContextSecondary } from "./components/ContextSecondary";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './Components/Contexts/searchContext';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextSecondary>
      <ContextPrimary>
        <App />
      </ContextPrimary>
    </ContextSecondary>
    <BrowserRouter>
    <SearchProvider>
    <App />
    </SearchProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);


