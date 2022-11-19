import classes from "./Footer.module.scss";
import FooterForm from "./FooterForm/FooterForm";
import NavLink from "../Header/Navbar/NavLink/NavLink";
import Container from "./../Container/Container";
import FooterAttribution from "./FooterAttribution/FooterAttribution";
import {
  Facebook,
  Twitter,
  Youtube,
  Pinterest,
  Instagram,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className={classes["Footer"]}>
      <div>
        <Container className={classes["Footer__content"]}>
          <div>
            <h2 className={classes["Subtitle"]}>Follow Us</h2>
            <div className={classes["Footer__social"]}>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/"
                aria-label="Youtube"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube />
              </a>
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.pinterest.com/"
                aria-label="Pinterest"
                target="_blank"
                rel="noreferrer"
              >
                <Pinterest />
              </a>
            </div>

            <h2 className={classes["Subtitle"]}>Information</h2>
            <ul className={classes["Footer__list"]}>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms & Conditions</NavLink>
            </ul>
          </div>
          <div>
            <address>
              <p className={classes["Subtitle"]}>Contact us</p>
              <a href="mailto:hello@travelgo.com">hello@travelgo.com</a>
            </address>
            <FooterForm />
          </div>
        </Container>
      </div>
      
      <FooterAttribution />
    </footer>
  );
};

export default Footer;
