import { useState } from "react";

import classes from "./Header.module.scss";
import logo from "../../assets/logo_light-mode.svg";
import Navbar from "./Navbar/Navbar";
import ButtonLink from "../Button/ButtonLink/ButtonLink";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { UseAuthContext } from "../../contexts/authContext";
import { Cart } from "react-bootstrap-icons";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const { user, logout } = UseAuthContext();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <header
      className={`${classes["Header"]} ${isSticky ? classes["Fixed"] : ""}`}
    >
      <Container>
        <Link to="/">
          <img src={logo} alt="TravelGo" className={classes["Header__logo"]} />
        </Link>

        <Navbar />
        <div className={classes["Header__links"]}>
          {!user ? (
            <>
              <ButtonLink to="/login" modifierClass="Button--white">
                Iniciar sesión
              </ButtonLink>
            </>
          ) : (
            <>
              <Link
                to="/cart"
                aria-label="Ir al carro de compras"
                className={classes["Header__cart"]}
              >
                <Cart />
              </Link>
              <ButtonLink
                onClick={() => logout()}
                modifierClass="Button--white"
              >
                Cerrar sesión
              </ButtonLink>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
