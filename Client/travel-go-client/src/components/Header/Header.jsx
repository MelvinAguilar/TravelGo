import { useState } from "react";

import classes from "./Header.module.scss";
import logo from "../../assets/logo_light-mode.svg";
import Navbar from "./Navbar/Navbar";
import Button from "../Button/Button";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`${classes["Header"]} ${isSticky ? classes["Fixed"] : ""}`}>
      <img src={logo} alt="TravelGo" className={classes["Header__logo"]} />

      <Navbar />

      <Button modifierClass="Button--white">Iniciar sesión</Button>
    </header>
  );
};

export default Header;
