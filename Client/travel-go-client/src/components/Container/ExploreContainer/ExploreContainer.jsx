import classes from "./ExploreContainer.module.scss";

import cameraPic from "./../../../assets/camera.png";

const ExploreContainer = ({ children }) => {
  return (
    <section className={classes["ExploreContainer"]}>
      <div className={classes["ExploreContainer__content"]}>
        <div>
          <div className={classes["ExploreContainer__mockup"]}>
            <img src={cameraPic} alt="" aria-hidden="true" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default ExploreContainer;
