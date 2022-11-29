import classes from "./TripsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Button from "../../components/Button/Button";
import NotFoundView from "../NotFoundView/NotFoundView";
import { Binoculars, HeartFill } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";

import { NavLink } from "react-router-dom";
import FavoriteTripsView from "../FavoriteTripsView/FavoriteTripsView";
import AllTripsView from "../AllTripsView/AllTripsView";

const TripsView = ({ className, ...rest }) => {


  return (
    <>
      <Header />
      <main className={classes["TripsView"]}>
        <ul className={classes["TripsView__tabs"]}>
          <li>
            <NavLink
              to="/trips"
              className={classes["TripsView__item"]}
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trips/favorite"
              className={classes["TripsView__item"]}
            >
              Favoritos
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="" element={<AllTripsView />} />
          <Route path="/favorite" element={<FavoriteTripsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>

        <ExploreContainer>
          <h2>
            Trips made with{" "}
            <span>
              <HeartFill
                className={classes["TripsView__heart"]}
                fill="#FF5A5F"
              />
            </span>{" "}
            just for you
          </h2>

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
      </main>
      <FooterAttribution />
    </>
  );
};

export default TripsView;
