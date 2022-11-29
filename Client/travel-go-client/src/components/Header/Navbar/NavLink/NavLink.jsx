import classes from "./NavLink.module.scss";
import { NavLink as NavLinkReactRouter } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ children, to }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className={classes["NavLink"]}>
      <NavLinkReactRouter
        className={`${classes["NavLink__link"]} ${
          match ? classes["NavLink__link--active"] : ""
        }`}
        to={to}
      >
        {children}
      </NavLinkReactRouter>
    </li>
  );
};

export default NavLink;
