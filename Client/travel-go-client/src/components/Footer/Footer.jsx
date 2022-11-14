import classes from "./Footer.module.scss";
import FooterForm from "./FooterForm/FooterForm";
import NavLink from "../Header/Navbar/NavLink/NavLink";

const Footer = () => {
  return (
    <footer className={classes["Footer"]}>
      <div className={classes["Footer__content"]}>
        <div>
          <h2 className={classes["Subtitle"]}>Follow Us</h2>
          <div className={classes["Footer__social"]}>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="Youtube"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.pinterest.com/"
              aria-label="Pinterest"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>

          <h2 className={classes["Subtitle"]}>Information</h2>
          <ul className={classes["Footer__list"]}>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms & Conditions</NavLink>
          </ul>
        </div>
        <div>
          <address>
            <p className={classes["Subtitle"]}>Contact us</p>
            <a href="mailto:hello@travelgo.com">hello@travelgo.com</a>
          </address>
          <FooterForm />
        </div>
      </div>

      <div className={classes["Footer__copy"]}>
        <p>© TRAVELGO 2022 by Los Fullstack</p>
      </div>
    </footer>
  );
};

export default Footer;
