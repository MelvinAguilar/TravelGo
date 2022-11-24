// import { useRouteError } from "react-router-dom";
import ButtonLink from "../../Button/ButtonLink/ButtonLink";
import classes from "./ErrorContainer.module.scss";
import pageNotFound from "./../../../assets/page-not-found.svg";
import { HeartFill } from "react-bootstrap-icons";

const ErrorContainer = () => {
  // const error = useRouteError();

  return (
    <div className={classes.ErrorContainer}>
      <div>
        <img src={pageNotFound} alt="" aria-hidden="true" />
      </div>
      <div>
        <p className={classes.ErrorContainer__greating}>Hello there</p>
        <h1 className={classes.ErrorContainer__title}>
          It seems something is missing
        </h1>
        <p className={classes.ErrorContainer__text}>
          But don’t worry, we got many trips made with 
          <span className="sr-only">heart</span>
          <HeartFill fill="#FF5A5F" />
          just for you.
        </p>
        <ButtonLink to="/" className={classes["error-page__button"]}>
          Go back to home
        </ButtonLink>
      </div>
    </div>
  );
};

export default ErrorContainer;
