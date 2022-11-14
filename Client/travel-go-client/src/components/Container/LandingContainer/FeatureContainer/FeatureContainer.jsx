import classes from "./FeatureContainer.module.scss";
import Button from "./../../../Button/Button";
import mockup from "./../../../../assets/shape.svg";

const FeatureContainer = () => {
  return (
    <section className={classes["FeatureContainer"]}>
      <img src={mockup}  alt="" aria-hidden="true" />
      <div className={classes["FeatureContainer__title"]}>
        <h2>Go solo, and enjoy your time.</h2>
        <p>
          Aplicamos tecnologías que nos permiten sistematizar, simplificar y
          automatizar la búsqueda de tus trips
        </p>
      </div>
    </section>
  );
};

export default FeatureContainer;
