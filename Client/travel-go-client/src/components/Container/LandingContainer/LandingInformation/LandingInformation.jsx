import classes from "./LandingInformation.module.scss";
import Button from "./../../../Button/Button";

import { Laptop } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import {Flower1} from "react-bootstrap-icons";
import { Cursor } from "react-bootstrap-icons";

const LandingInformation = () => {
  return (
    <section className={classes["LandingInformation"]}>
      <div className={classes["LandingInformation__title"]}>
        {/* <Cursor size={50}/> */}
        <div>
          <h2>Decidí tu trip perfecto con solo un click</h2>
          <p>¡No te preocupes! Disfruta de tu viaje, nosotros nos encargamos del resto.</p>
        </div>
      </div>
      <div className={classes["LandingInformation__cards"]}>
        <div className={classes["LandingInformation__card"]}>
          <Stars size={50} />
          <h3>Encuentra el lugar perfecto</h3>
          <p>
            Hermosas playas, imponentes montañas, lagunas en lo profundo de bosques, dejate atrapar por las maravillas que te ofrece el país. Escoje entre las docenas de lugares cuidadosamente seleccionadas por nuestro equipo, descubre los secretos que guarda El Salvador en sus tierras.
          </p>
          <a className={classes["Link--cute_pink"]}
            href="https://en.wikipedia.org/wiki/El_Salvador" 
            target="_blank" rel="noreferrer noopener"
          >Saber más</a>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <Laptop size={55} />
          <h3>Tecnología detras de TRAVELGO</h3>
          <p>
          Aplicamos herramientas que nos permiten sistematizar, simplificar y automatizar la búsqueda de lugares ideales para la aventura, hostales/hoteles para turistas, restaurantes y pequeños locales con recuerdos, asi como la planificación de tus actividades favoritos en tus lugares turísticos.
          </p>         
          <a className={classes["Link--baby_blue"]}
            href="https://en.wikipedia.org/wiki/El_Salvador"  
            target="_blank" rel="noreferrer noopener"
          >Saber más</a>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <Flower1 size={45} />
          <h3>Eco trips y cultura salvadoreña</h3>
          <p>
            ¿Preocupado por el medio ambiente? La mayoria de nuestros trips están seleccionados para que disfrutes responsable y respetuosamente de la narturaleza. Debes saber que al escoger TRAVELGO formas parte de la cultura del <i>kilometro cero</i>, mientras te diviertes practicas el consumo local y ayudas a miles de salvadoreños.
          </p>
          <a className={classes["Link--light_yellow"]}
            href="https://en.wikipedia.org/wiki/El_Salvador" 
            target="_blank" rel="noreferrer noopener"
            >Saber más</a>
        </div>
      </div>
    </section>
  );
};

export default LandingInformation;
