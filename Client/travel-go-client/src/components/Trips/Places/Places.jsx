import classes from "./Places.module.scss";
import SinglePlace from "../SinglePlace/SinglePlace";

const Places = ({ trips = [] }) => {
  const mappedPlaces = trips.map((trip) => {
    return (
      <SinglePlace
        key={trip._id}
        id={trip._id}
        nombre={trip.nombre}
        ubicacion={`${trip.ubicacion.departamento}, ${trip.ubicacion.direccion}`}
        img={trip.img[0]}
      />
    );
  });

  return (
    <section className={classes["Places"]}>
      <h2 className="sr-only">Lista de lugares turísticos</h2>
      <div className={classes["Places__container"]}>{mappedPlaces}</div>
    </section>
  );
};

export default Places;
