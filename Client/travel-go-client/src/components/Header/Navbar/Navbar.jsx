import { useState } from 'react'

import classes from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";
import { List } from "react-bootstrap-icons";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) };

  return (
    <nav className={`${classes["Navbar"]} ${isMenuOpen ? classes["Navbar--open"] : ""}`}>
      <ul className={classes["Navbar__list"]}>
        <NavLink to="/" exact>Inicio</NavLink>
        <NavLink to="/trips">Lugares turísticos</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
      </ul>
      <button className={classes["Navbar__toggle-button"]} onClick={toggleMenu}>
        <List />
      </button>
    </nav>
  );
};

export default Navbar;
