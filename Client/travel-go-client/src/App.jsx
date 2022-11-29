import classes from "./App.module.scss";

import NotFoundView from "./views/NotFoundView/NotFoundView";
import LandingView from "./views/LandingView/LandingView";
import LoginView from "./views/LoginView/LoginView";
import SignupView from "./views/SignupView/SignupView";
import PlaceView from "./views/PlaceView/PlaceView";
import PrivacyPolicyView from "./views/PrivacyPolicyView/PrivacyPolicyView";
import TermsOfServiceView from "./views/TermsOfServiceView/TermsOfServiceView";
import ShoppingCartView from "./views/ShoppingCartView/ShoppingCartView";
import CreatePlaceView from "./views/CreatePlaceView/CreatePlaceView";
import TripsView from "./views/TripsView/TripsView";
import AboutUsView from "./views/AboutUsView/AboutUsView";
import PDFR from "./views/PDFView/PDFView";

import { Route, Routes, useParams, Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "./contexts/authContext";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";

function App() {
  const { user } = UseAuthContext();

  const ProtectedRoute = ({ redirectPath = "/" }) => {
    toast.error(
      "No tienes permiso para acceder a esta página, inicia sesión con una cuenta válida", {
        toastId: "errorRoute",
      }
    );
    return <Navigate to={redirectPath} replace />;
  };

  return (
    <Routes>
      <Route path="/Compra" element={<PDFR />} />
      <Route path="/" element={<LandingView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<SignupView />} />
      <Route path="/place/:placeId" element={<PlaceView />} />
      <Route path="/cart" element={<ShoppingCartView />} />
      <Route path="/terms-of-service" element={<TermsOfServiceView />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
      <Route path="/trips/*" element={<TripsView />} />
      <Route path="/about" element={<AboutUsView />} />
      <Route path="*" element={<NotFoundView />} />

      {user && user.roles.includes("admin") && (
        <Route path="/admin/create-place" element={<CreatePlaceView />} />
      )}
      {!user || !user.roles.includes("admin") && (
        <Route path="/admin/*" element={<ProtectedRoute />} />
      )}
    </Routes>
  );
}

export default App;
