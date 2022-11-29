import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App";
import axios from 'axios';
import Loader from "./components/Loader/Loader";
import ScrollToTop from './services/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import { ConfigProvider } from "./contexts/ConfigContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { AuthContextProvider } from "./contexts/authContext"; 
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3000/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
          <AuthContextProvider>
            <ScrollToTop />
            <ScrollToTopButton />
            <AppComponent />
            <ToastContainer
              theme="light"
              position="top-right"
              pauseOnHover="false"
            />
            <Loader />
        </AuthContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
