import classes from "./LandingView.module.scss";
import Button from "../../components/Button/Button";
import LandingInformation from "../../components/Container/LandingContainer/LandingInformation/LandingInformation";
import CategoryContainer from "../../components/Container/LandingContainer/CategoryContainer/CategoryContainer";
import FeatureContainer from "../../components/Container/LandingContainer/FeatureContainer/FeatureContainer";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Container from "../../components/Container/Container";
import Place from "../../components/Trips/Places/Places";
import SandMobile from "./../../assets/bg-sand-mobile.png";
import SandDesktop from "./../../assets/bg-sand-desktop.png";
import Woman from "./../../assets/woman.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { Binoculars } from "react-bootstrap-icons";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const LandingView = () => {
  const [ trips, setTrips ] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const { data } = await axios.get("/places_info");
      setTrips(data);
    } catch (error) {
      toast.error(error.message, {
        toastId: "fetchTripsError"
      });
    }
  };

  return (
    <>
      <Header />
      <main className={classes["LandingContainer"]}>
        <div className={classes["LandingContainer__content"]}>
          <Container>
            <div className={classes["LandingContainer__content-text"]}>
              <h1>
                Let's find your <span>Adventure</span>
              </h1>
              <p>
                Descubre lugares mágicos en El Salvador, un paraíso tropical
                secreto en medio de junglas de concreto.
              </p>
              <Button modifierClass="Button--white">
                Explore a hidden trip
                <Binoculars />
              </Button>
            </div>
            <div className={classes["LandingContainer__content-image"]}>
              <img
                src={Woman}
                className={classes["woman"]}
                alt=""
                aria-hidden="true"
              />
              <picture>
                <source srcSet={SandDesktop} media="(min-width: 62em)" />
                <img
                  src={SandMobile}
                  className={classes["sand"]}
                  alt=""
                  aria-hidden="true"
                />
              </picture>
            </div>
          </Container>
        </div>

        <Container>
          <LandingInformation />
          {/* <FeatureContainer /> */}
          <CategoryContainer />

          <ExploreContainer>
            <h2>Multitrips made for you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae congue justo. Maecenas at imperdiet ligula, et lobortis
              augue. Nam suscipit.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam vitae congue justo.
            </p>
            <Button modifierClass="Button--purple">
              Explore a hidden trip
              <Binoculars />
            </Button>
            
          </ExploreContainer>

          <Place trips={trips} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default LandingView;
