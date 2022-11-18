import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppComponent />
      <ToastContainer
        theme="light"
        position="top-right"
        pauseOnHover="false"
      />
    </BrowserRouter>
  </React.StrictMode>
);
