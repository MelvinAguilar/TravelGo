import classes from "./SinglePlace.module.scss";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";

const SinglePlace = ({ id, nombre = "", img = "", ubicacion = "" }) => {
  return (
    <div className={classes["SinglePlace"]}>
      <img src={img} alt={nombre} className={classes["SinglePlace__image"]} />
      <div className={classes["SinglePlace__info"]}>
        <div>
          <h3 className={classes["SinglePlace__title"]}>{nombre}</h3>
          <p className={classes["SinglePlace__location"]}>{ubicacion}</p>
        </div>
        <ChevronRight className={classes["SinglePlace__icon"]} />
        <Link
          to={`/place/${id}`}
          aria-label="Mirar detalles del lugar"
          className={classes["SinglePlace__link"]}
        />
      </div>
    </div>
  );
};

export default SinglePlace;
