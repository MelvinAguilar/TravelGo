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
            <h2 className={classes["Subtitle"]}>Siguenos en</h2>
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

            <h2 className={classes["Subtitle"]}>Contenidos</h2>
            <ul className={classes["Footer__list"]}>
              <NavLink to="/about">Acerca de nosotros</NavLink>
              <NavLink to="/trips">Lugares</NavLink>
              <NavLink to="/privacy-policy">Política de Privacidad</NavLink>
              <NavLink to="/terms-of-service">Terminos y Condiciones</NavLink>
            </ul>
          </div>
          <div>
            <address>
              <p className={classes["Subtitle"]}>Contáctanos</p>
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
