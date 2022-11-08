import classes from "./NavLink.module.scss";

const NavLink = ({ children, to }) => {
  return (
    <li className={classes["NavLink"]}>
      <a href={to} className={classes["NavLink__item"]}>
        {children}
      </a>
    </li>
  );
};

export default NavLink;
