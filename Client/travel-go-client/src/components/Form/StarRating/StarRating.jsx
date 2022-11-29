import classes from "./StarRating.module.scss";
import { useState, useEffect } from "react";

const StarRating = ({ ratingSet, innerRef, onUpdate = () => {}, ...rest }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(ratingSet);
  }, [ratingSet]);

  const onUpdateHandler = (rating) => {
    setRating(rating);
    onUpdate(rating);
  };

  const setStyle = (star) => {
    if (star < rating) {
      return classes["star-prev-active"];
    } else if (star === Math.ceil(rating) && !Number.isInteger(rating)) {
      return classes["star-semi"];
    } else if (star === Math.ceil(rating) && Number.isInteger(rating)) {
      return classes["star-prev-active"];
    } else {
      return "";
    }
  };

  return (
    <fieldset className={classes["StarRating"]} {...rest}>
      <legend className="sr-only">Calificación</legend>
      <label htmlFor="star-1">
        <input
          type="radio"
          className={setStyle(1)}
          onClick={() => onUpdateHandler(1)}
          name="star"
          id="star-1"
          {...innerRef}
        />
        <span className={classes["star"] + " " + classes["star-1"]}>
          &#9733;
        </span>
      </label>
      <label htmlFor="star-2">
        <input
          type="radio"
          className={setStyle(2)}
          onClick={() => onUpdateHandler(2)}
          name="star"
          id="star-2"
          {...innerRef}
        />
        <span className={classes["star"]}>&#9733;</span>
      </label>
      <label htmlFor="star-3">
        <input
          type="radio"
          name="star"
          className={setStyle(3)}
          onClick={() => onUpdateHandler(3)}
          id="star-3"
          {...innerRef}
        />
        <span className={classes["star"]}>&#9733;</span>
      </label>
      <label htmlFor="star-4">
        <input
          type="radio"
          name="star"
          className={setStyle(4)}
          onClick={() => onUpdateHandler(4)}
          id="star-4"
          {...innerRef}
        />
        <span className={classes["star"]}>&#9733;</span>
      </label>
      <label htmlFor="star-5">
        <input
          type="radio"
          name="star"
          className={setStyle(5)}
          onClick={() => onUpdateHandler(5)}
          id="star-5"
          {...innerRef}
        />
        <span className={classes["star"]}>&#9733;</span>
      </label>
    </fieldset>
  );
};

export default StarRating;
