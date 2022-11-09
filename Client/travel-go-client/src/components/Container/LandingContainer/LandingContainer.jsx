import classes from "./LandingContainer.module.scss";
import Button from "./../../Button/Button";
import LandingInformation from "./LandingInformation/LandingInformation";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import FeatureContainer from "./FeatureContainer/FeatureContainer";

import leaf1 from "./../../../assets/leaf.svg";
import leaf2 from "./../../../assets/leaf2.svg";
import leaf3 from "./../../../assets/leaf3.svg";
import leaf4 from "./../../../assets/leaf4.svg";
import arena from "./../../../assets/bg-sand.png";
import woman from "./../../../assets/woman.svg";

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
        <div className={classes["LandingContainer__content-image"]}>
          <img
            src={woman}
            className={classes["woman"]}
            alt=""
            aria-hidden="true"
          />
          <img
            src={arena}
            className={classes["sand"]}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <LandingInformation />
      <FeatureContainer />
      <CategoryContainer />
    </div>
  );
};

export default LandingContainer;
