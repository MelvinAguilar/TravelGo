import classes from "./TripsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Button from "../../components/Button/Button";
import Place from "../../components/Trips/Places/Places";
import axios from 'axios';
import { Binoculars, HeartFill } from "react-bootstrap-icons";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useConfigContext } from '../../contexts/ConfigContext';

const TripsView = ({ className, ...rest }) => {
  
  const [ trips, setTrips ] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();

  useEffect(() => {
    fetchTrips();
  }, []);


  const fetchTrips = async () => {
    try {
      startLoading();

      const { data } = await axios.get("/places_info");
      setTrips(data);
    } catch (error) {
      toast.error(error.message, {
        toastId: "fetchTripsError"
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <Header />
      <main className={classes["TripsView"]}>
      <ExploreContainer>
          <h2>Trips made with <span><HeartFill/></span>just for you</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            congue justo. Maecenas at imperdiet ligula, et lobortis augue. Nam
            suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam vitae congue justo.
          </p>
          <Button modifierClass="Button--purple">
            Explore a hidden trip
            <Binoculars/>
          </Button>
        </ExploreContainer>

        <Place trips={trips} />
        
      </main>
      <FooterAttribution />
    </>
  );
};

export default TripsView;
