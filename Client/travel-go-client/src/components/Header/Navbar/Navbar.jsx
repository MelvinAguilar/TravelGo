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
        <NavLink to="/destinations">solo trips</NavLink>
        <NavLink to="/multidestinations">multi-trips</NavLink>
        <NavLink to="/text">hecho para ti</NavLink>
        <NavLink to="/about">nosotros</NavLink>
      </ul>
      <button className={classes["Navbar__toggle-button"]} onClick={toggleMenu}>
        <List />
      </button>
    </nav>
  );
};

export default Navbar;
