<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ContextPrimary } from "./components/Convertor/ContextPrimary";
import { ContextSecondary } from "./components/Convertor/ContextSecondary";
import { SearchProvider } from "./components/Contexts/searchContext";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './Components/Contexts/searchContext';
>>>>>>> 8b110a9457e23cdd90934ab4dde9204ecd13410e
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextSecondary>
        <ContextPrimary>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ContextPrimary>
      </ContextSecondary>
    </BrowserRouter>
  </React.StrictMode>
);
