import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import LandingContainer from "./components/Container/LandingContainer/LandingContainer";
import Footer from "./components/Footer/Footer";
import FooterAttribution from "./components/Footer/FooterAttribution/FooterAttribution";
import Login from "./components/Login/Login";
import Singup from "./components/Signup/Signup";
import BookingContainer from "./components/Container/bookingContainer/BookingContainer";
import CartContainer from "./components/Container/ShoppingCartContainer/ShoppingCartContainer";
import ErrorPage from "./components/Container/ErrorContainer/ErrorContainer";
import TermsOfService from "./components/Container/TermsOfService/TermsOfService";
import PrivacyPolicy from "./components/Container/PrivacyPolicy/PrivacyPolicy";
import PlaceContainer from "./components/Container/PlaceContainer/PlaceContainer";
import { Route, Routes } from "react-router-dom";

const rootElement = (element) => {
  return (
    <div className={classes["App"]}>
      <Header />
      <main>{element}</main>
      <Footer />
    </div>
  );
};

const AppWithHeader = (element) => {
  return (
    <div className={classes["App"]}>
      <Header />
      <main>{element}</main>
    </div>
  );
};

const AppWithAttribution = (element) => {
  return (
    <div className={classes["App"]}>
      <Header />
      <main>{element}</main>
      <footer>
        <FooterAttribution />
      </footer>
    </div>
  );
};

const AppMain = (element) => {
  return (
    <div className={classes["App"]}>
      <main>{element}</main>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={rootElement(<LandingContainer />)} />
      <Route path="/login" element={AppMain(<Login />)} />
      <Route path="/register" element={AppMain(<Singup />)} />
      <Route path="/booking" element={rootElement(<BookingContainer />)} />
      <Route path="/cart" element={AppWithAttribution(<CartContainer />)} />
      <Route path="/terms-of-service" element={AppWithAttribution(<TermsOfService />)} />
      <Route path="/privacy-policy" element={AppWithAttribution(<PrivacyPolicy />)} />
      <Route path="/place" element={AppWithAttribution(<PlaceContainer />)} />
      <Route path="*" element={AppWithHeader(<ErrorPage />)} />
    </Routes>
  );
}

export default App;
