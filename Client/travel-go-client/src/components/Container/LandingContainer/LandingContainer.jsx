import classes from "./LandingContainer.module.scss";
import Button from "./../../Button/Button";

const LandingContainer = () => {
  return (
    <div className={classes["LandingContainer"]}>
      <div>
        <h1>
          Let's find your <span>Adventure</span>
        </h1>
        <p>
          Descubre lugares mágicos en El Salvador, un paraíso tropical secreto
          en medio de junglas de concreto.
        </p>
        <Button>Explore a hidden trip</Button>
      </div>
    </div>
  );
};

export default LandingContainer;
