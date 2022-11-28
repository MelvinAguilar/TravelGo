import classes from "./FeatureContainer.module.scss";
import Button from "./../../../Button/Button";
import mockup from "./../../../../assets/shape.svg";

const FeatureContainer = () => {
  return (
    <section className={classes["FeatureContainer"]}>
      <img src={mockup}  alt="" aria-hidden="true" />
      <div className={classes["FeatureContainer__title"]}>

        <h2>Go solo,
        <h2>and enjoy</h2> 
        <h2>your time.</h2> </h2>

        <p> Descubrí las maravillas que te ofrece tu trip, un paso a la vez.
        Durante tu estadía en un lugar, conocerás a profundidad lo que tiene que ofrecerte, sin preocuparte, solo disfrutando de tu tiempo en ese lugar.</p>
      </div>

    </section>
  );
};

export default FeatureContainer;
