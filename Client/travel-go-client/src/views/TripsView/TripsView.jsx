import classes from "./TripsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Button from "../../components/Button/Button";
import Place from "../../components/Trips/Places/Places";
import {Binoculars, HeartFill} from "react-bootstrap-icons";

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContext';

const placeInformation = [
  {
    "_id": "keyjfdsfs84723424",
    "nombre": "Cascada La Olomina · Arambala, Morazán",
    "precio": 45.00,
    "descripcion": "A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest",
    "cant_comentarios": 100,
    "puntuacion_prom": 2.1,
    "img": ["https://i.imgur.com/q5Bhljy.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg"],
    "etiquetas": ["Vista a la montaña", "Escalar", "Natación", "Acampar", "Fotografía", "Estadia", "Soleado", "Transporte", "Naturaleza", "Comida"],
    "ubicacion": {
      "departamento": "Usulután",
      "direccion": "Jucuarán, Usulután",
      "_id": {
        "$oid": "6381060790bbac72edc02aa0"
      }
    }
  },
  {
    "_id": "key7432hwcsc3442",
    "nombre": "Cascada La Olomina · Arambala, Morazán",
    "precio": 45.00,
    "descripcion": "A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest",
    "cant_comentarios": 100,
    "puntuacion_prom": 3.5,
    "img": ["https://i.imgur.com/q5Bhljy.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg"],
    "etiquetas": ["Vista a la montaña", "Escalar", "Natación", "Acampar", "Fotografía", "Estadia", "Soleado", "Transporte", "Naturaleza", "Comida"],
    "ubicacion": {
      "departamento": "Usulután",
      "direccion": "Jucuarán, Usulután",
      "_id": {
        "$oid": "6381060790bbac72edc02aa0"
      }
    }
  },
  {
  "_id": "keysi42342654342",
    "nombre": "Cascada La Olomina · Arambala, Morazán",
    "precio": 45.00,
    "descripcion": "A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest",
    "cant_comentarios": 100,
    "puntuacion_prom": 4.5,
    "img": ["https://i.imgur.com/q5Bhljy.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg", "https://i.imgur.com/9Z1Z1Zu.jpeg"],
    "etiquetas": ["Vista a la montaña", "Escalar", "Natación", "Acampar", "Fotografía", "Estadia", "Soleado", "Transporte", "Naturaleza", "Comida"],
    "ubicacion": {
      "departamento": "Usulután",
      "direccion": "Jucuarán, Usulután",
      "_id": {
        "$oid": "6381060790bbac72edc02aa0"
      }
    }
  },

]



const TripsView = ({ className, ...rest }) => {
  
  const [ trips, setTrips ] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();

  //Create an array of trips using placeInformation
  useEffect(() => {
    setTrips(placeInformation);
  }, []);

  // useEffect(() => {
  //   startLoading();
  //   axios.get("/places_info")
  //     .then((response) => {
  //       setTrips(response.data);
  //       console.log(response.data);
  //       stopLoading();
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       toast.error(error.message);
  //       stopLoading();
  //     });
  // }, []);

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
