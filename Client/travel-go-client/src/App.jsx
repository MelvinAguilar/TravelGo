import classes from './App.module.scss';

import NotFoundView from "./views/NotFoundView/NotFoundView";
import LandingView from "./views/LandingView/LandingView";
import LoginView from "./views/LoginView/LoginView";
import SignupView from "./views/SignupView/SignupView";
import PlaceView from "./views/PlaceView/PlaceView";
import PrivacyPolicyView from "./views/PrivacyPolicyView/PrivacyPolicyView";
import TermsOfServiceView from "./views/TermsOfServiceView/TermsOfServiceView";
import ShoppingCartView from "./views/ShoppingCartView/ShoppingCartView";
//import CreatePlaceView from './views/CreatePlaceView/CreatePlaceView';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<LandingView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<SignupView />} />
      <Route path="/" element={<PlaceView />} />
      <Route path="/cart" element={<ShoppingCartView />} />
      <Route path="/terms-of-service" element={<TermsOfServiceView />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
      {/* <Route path="/create-place" element={<CreatePlaceView />} /> */}
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
