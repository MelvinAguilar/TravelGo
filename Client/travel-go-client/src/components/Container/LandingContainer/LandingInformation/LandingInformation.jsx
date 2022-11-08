import classes from "./LandingInformation.module.scss";
import Button from "./../../../Button/Button";

const LandingInformation = () => {
  return (
    <section className={classes["LandingInformation"]}>
      <div className={classes["LandingInformation__title"]}>
        <div>
          <h2>Decide your perfect trip with a click</h2>
          <p>Dont't worry! Enjoy the rest of your trip.</p>
        </div>
        <i className="fas fa-search"></i>
      </div>
      <div className={classes["LandingInformation__cards"]}>
        <div className={classes["LandingInformation__card"]}>
          <i className="fas fa-map-marked-alt"></i>
          <h3>Find your destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos quas.
          </p>
          <Button modifierClass="Button--blue">Explore</Button>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <i className="fas fa-map-marked-alt"></i>
          <h3>Find your destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos quas.
          </p>
          <Button modifierClass="Button--blue">Explore</Button>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <i className="fas fa-map-marked-alt"></i>
          <h3>Find your destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos quas.
          </p>
          <Button modifierClass="Button--blue">Explore</Button>
        </div>
      </div>
    </section>
  );
};

export default LandingInformation;
