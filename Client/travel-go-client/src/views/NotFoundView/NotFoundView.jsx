import ButtonLink from "../../components/Button/ButtonLink/ButtonLink";
import classes from "./NotFoundView.module.scss";
import pageNotFound from "./../../assets/page-not-found.png";
import Header from "../../components/Header/Header";
import { HeartFill } from "react-bootstrap-icons";

const NotFoundView = () => {
  return (
    <>
    <Header />
    <main className={classes.ErrorContainer}>
      <div>
        <img src={pageNotFound} alt="" aria-hidden="true" />
      </div>
      <div>
        <p className={classes.ErrorContainer__greating}>¡HOLA!</p>
        <h1 className={classes.ErrorContainer__title}>
          Parece que algo salió mal.
        </h1>
        <p className={classes.ErrorContainer__text}>
          Pero no te preocupes, tenemos varios trips hechos con 
          <span className="sr-only">el corazón</span>
          <HeartFill fill="#FF5A5F" className={classes.ErrorContainer__heart} />
          solo para ti.
        </p>
        <ButtonLink to="/" className={classes["error-page__button"]}>
          De vuelta al Inicio
        </ButtonLink>
      </div>
    </main>
    </>
  );
};

export default NotFoundView;
