import classes from "./TripsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import ExploreContainer from "../../components/Container/ExploreContainer/ExploreContainer";
import Button from "../../components/Button/Button";
import NotFoundView from "../NotFoundView/NotFoundView";
import FavoriteTripsView from "../FavoriteTripsView/FavoriteTripsView";
import AllTripsView from "../AllTripsView/AllTripsView";

import { Binoculars, HeartFill } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { randomPlace } from "../../services/placeServer";
import { useNavigate } from "react-router-dom";

const TripsView = ({ className, ...rest }) => {
  const navigateTo = useNavigate();
  const { fetchRandomPlace, place } = randomPlace();

  const onClickHandler = () => {
    fetchRandomPlace();
    if (place && place[0]) {
      navigateTo(`/place/${place[0]._id}`);
    }
  };

  return (
    <>
      <Header />
      <main className={classes["TripsView"]}>
        <ul className={classes["TripsView__tabs"]}>
          <li>
            <NavLink to="/trips" className={classes["TripsView__item"]}>
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
            Destinos hechos con{" "}
            <span>
              <HeartFill
                className={classes["TripsView__heart"]}
                fill="#FF5A5F"
              />
            </span>{" "}
            para ti.
          </h2>

          <p>
            Sabemos que te encanta la aventura, y que descubir un solo lugar no
            te puede conformar o llenar. Es por eso que hemos creado una
            selección de multitrips especialmente para ti.
          </p>
          <p>
            Explora montañas, rios y lagunas mientras disfutas de las playas y
            practicas tus actividades favoritas, en un mismo trip, a un mejor
            precio.
          </p>
          <Button modifierClass="Button--purple" onClick={onClickHandler}>
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
