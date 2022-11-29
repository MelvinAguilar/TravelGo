import classes from "./ScrollToTopButton.module.scss";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons";

const ScrollToTopButton = ({ className, ...rest }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <div className={classes["ScrollToTopButton"]}>
          <button
            className={classes["ScrollToTopButton__button"]}
            onClick={scrollToTop}
            type="button"
          >
            <ArrowUp className={classes["ScrollToTopButton__icon"]} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
