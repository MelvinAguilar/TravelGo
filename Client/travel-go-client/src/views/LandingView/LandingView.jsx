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
import { randomPlace } from "../../services/placeServer";
import { useNavigate } from "react-router-dom";

const LandingView = () => {
  const navigateTo = useNavigate();
  const [ trips, setTrips ] = useState([]);
  const { fetchRandomPlace, place } = randomPlace();

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

  const onClickHandler = () => {
    fetchRandomPlace();
    if (place && place[0]) {
      navigateTo(`/place/${place[0]._id}`);
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
                Descubre lugares mágicos en El Salvador, un paraíso tropical completamente 
                secreto en medio de junglas de concreto.
              </p>
              <Button modifierClass="Button--white" onClick={onClickHandler}>
                Explora un trip mágico
                <Binoculars/>
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
          <FeatureContainer />
          <CategoryContainer />

          <ExploreContainer>
            <h2>Destinos hechos solo para ti</h2>
            <p>
              Sabemos que te encanta la aventura, y que descubir un solo lugar no te puede conformar o llenar. Es por eso que hemos creado una selección de multitrips especialmente para ti.</p> 
            <p> Explora montañas, rios y lagunas mientras disfutas de las playas y practicas tus actividades favoritas, en un mismo trip, a un mejor precio.</p>
            <Button modifierClass="Button--purple" onClick={onClickHandler}>
              Explora un trip mágico
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
