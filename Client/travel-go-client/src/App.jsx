import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Booking from "./components/Container/bookingContainer/bookingContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={classes["App"]}>
      {//<Header />
      }

      <main>
        <Booking />
      </main>

      {<Footer />
      }
    </div>
  );
}

export default App;
