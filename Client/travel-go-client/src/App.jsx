import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import LandingContainer from "./components/Container/LandingContainer/LandingContainer";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Singup from "./components/Signup/Signup";
import BookingContainer from "./components/Container/bookingContainer/BookingContainer";
import CarritoContainer from "./components/Container/ShoppingCartContainer/ShoppingCartContainer";

function App() {
  return (
    <div className={classes["App"]}>
         {//<Header />
         }
      
{/* 
        <main>
            {
              // <CarritoContainer/>
              <LandingContainer />
              // <BookingContainer/>
            }
        </main> */}

       <Footer />
       

      {/* <Login /> */}
      
      { //<Singup />
       }
      
    </div>
  );
}

export default App;
