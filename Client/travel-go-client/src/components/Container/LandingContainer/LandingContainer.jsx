import classes from "./LandingContainer.module.scss";
import Button from "./../../Button/Button";
import LandingInformation from "./LandingInformation/LandingInformation";
import CategoryContainer from "./CategoryContainer/CategoryContainer";

const LandingContainer = () => {
  return (
    <div className={classes["LandingContainer"]}>
      <div className={classes["LandingContainer__content"]}>
        <div className={classes["LandingContainer__content-text"]}>
          <h1>
            Let's find your <span>Adventure</span>
          </h1>
          <p>
            Descubre lugares mágicos en El Salvador, un paraíso tropical secreto
            en medio de junglas de concreto.
          </p>
          <Button modifierClass="Button--white">
            Explore a hidden trip
            <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
      </div>
      
      <LandingInformation />
      <CategoryContainer />
    </div>
  );
};

export default LandingContainer;
