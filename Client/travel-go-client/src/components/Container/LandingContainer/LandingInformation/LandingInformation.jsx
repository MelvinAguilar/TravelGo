import classes from "./LandingInformation.module.scss";
import Button from "./../../../Button/Button";

import { Laptop } from "react-bootstrap-icons";
import { Cursor } from "react-bootstrap-icons";

const LandingInformation = () => {
  return (
    <section className={classes["LandingInformation"]}>
      <div className={classes["LandingInformation__title"]}>
        <Cursor size={70}/>
        <div>
          <h2>Decide your perfect trip with a click</h2>
          <p>Dont't worry! Enjoy the rest of your trip.</p>
        </div>
      </div>
      <div className={classes["LandingInformation__cards"]}>
        <div className={classes["LandingInformation__card"]}>
          <Laptop size={60} />
          <h3>Find your destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos quas.
          </p>
          <Button modifierClass="Button--blue">Explore</Button>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <Laptop size={60} />
          <h3>Find your destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos quas.
          </p>
          <Button modifierClass="Button--blue">Explore</Button>
        </div>
        <div className={classes["LandingInformation__card"]}>
          <Laptop size={60} />
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
