import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App";
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3500/api";

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
