import classes from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  return (
    <nav className={classes["Navbar"]}>
      <ul className={classes["Navbar__list"]}>
        <NavLink to="/about">Home</NavLink>
        <NavLink to="/about">trips</NavLink>
        <NavLink to="/about">hecho para ti</NavLink>
        <NavLink to="/about">nosotros</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
