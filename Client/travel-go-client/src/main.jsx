import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App";
import axios from 'axios';
import Loader from "./components/Loader/Loader";
import { ConfigProvider } from "./contexts/ConfigContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { authContextProvider } from "./contexts/authContext"; 
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3500/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
          <authContextProvider>
            <AppComponent />
            <ToastContainer
              theme="light"
              position="top-right"
              pauseOnHover="false"
            />
            <Loader />
        </authContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
