import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Booking from "./components/Container/bookingContainer/bookingPage";
import LandingContainer from "./components/Container/LandingContainer/LandingContainer";
import Booking from "./components/Container/bookingContainer/bookingContainer";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Singup from "./components/Signup/Signup";

function App() {
  return (
    <div className={classes["App"]}>
      {/* <Header />
      

      <main>
          <LandingContainer />
      </main>

      <Footer /> */}
      <Login />
      {/* <Singup /> */}
      
    </div>
  );
}

export default App;
