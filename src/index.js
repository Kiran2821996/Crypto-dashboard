import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ContextPrimary } from "./components/Convertor/ContextPrimary";
import { ContextSecondary } from "./components/Convertor/ContextSecondary";
import { SearchProvider } from "./components/Contexts/searchContext";
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
