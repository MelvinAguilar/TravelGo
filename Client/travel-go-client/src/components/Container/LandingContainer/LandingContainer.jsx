import classes from "./LandingContainer.module.scss";
import Button from "./../../Button/Button";
import LandingInformation from "./LandingInformation/LandingInformation";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import FeatureContainer from "./FeatureContainer/FeatureContainer";
import ExploreContainer from "./../ExploreContainer/ExploreContainer";
import Container from "./../Container";

import sandMobile from "./../../../assets/bg-sand-mobile.png";
import sandDesktop from "./../../../assets/bg-sand-desktop.png";
import woman from "./../../../assets/woman.svg";
import { Binoculars } from "react-bootstrap-icons";

const getFromSessionStorage = ()=>{
  const rol = sessionStorage.getItem("userRol");
  const token = sessionStorage.getItem("userToken");
  console.log(`rol: ${rol} token: ${token}`);
}

const LandingContainer = () => {
  getFromSessionStorage();
  return (
    <div className={classes["LandingContainer"]}>
      <div className={classes["LandingContainer__content"]}>
        <Container>
          <div className={classes["LandingContainer__content-text"]}>
            <h1>
              Let's find your <span>Adventure</span>
            </h1>
            <p>
              Descubre lugares mágicos en El Salvador, un paraíso tropical
              secreto en medio de junglas de concreto.
            </p>
            <Button modifierClass="Button--white">
              Explore a hidden trip
              <Binoculars />
            </Button>
          </div>
          <div className={classes["LandingContainer__content-image"]}>
            <img
              src={woman}
              className={classes["woman"]}
              alt=""
              aria-hidden="true"
            />
            <picture>
              <source srcSet={sandDesktop} media="(min-width: 62em)" />
              <img
                src={sandMobile}
                className={classes["sand"]}
                alt=""
                aria-hidden="true"
              />
            </picture>
          </div>
        </Container>
      </div>

      <Container>
        <LandingInformation />
        <FeatureContainer />
        <CategoryContainer />
        
        <ExploreContainer>
          <h2>Multitrips made for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            congue justo. Maecenas at imperdiet ligula, et lobortis augue. Nam
            suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam vitae congue justo.
          </p>
          <Button modifierClass="Button--purple">
            Explore a hidden trip
            <Binoculars />
          </Button>
        </ExploreContainer>

      </Container>
    </div>
  );
};

export default LandingContainer;
