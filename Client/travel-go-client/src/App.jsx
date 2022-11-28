import classes from './App.module.scss';

import NotFoundView from "./views/NotFoundView/NotFoundView";
import LandingView from "./views/LandingView/LandingView";
import LoginView from "./views/LoginView/LoginView";
import SignupView from "./views/SignupView/SignupView";
import PlaceView from "./views/PlaceView/PlaceView";
import PrivacyPolicyView from "./views/PrivacyPolicyView/PrivacyPolicyView";
import TermsOfServiceView from "./views/TermsOfServiceView/TermsOfServiceView";
import ShoppingCartView from "./views/ShoppingCartView/ShoppingCartView";
import CreatePlaceView from './views/CreatePlaceView/CreatePlaceView';
import TripsView from "./views/TripsView/TripsView";
import AboutUsView from "./views/AboutUsView/AboutUsView";

import { Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<SignupView />} />
      <Route path="/place/:placeId" element={<PlaceView />} />
      <Route path="/cart" element={<ShoppingCartView />} />
      <Route path="/terms-of-service" element={<TermsOfServiceView />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
      <Route path="/create-place" element={<CreatePlaceView />} />
      <Route path="/trips/*" element={<TripsView />} />
      <Route path="/about" element={<AboutUsView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
