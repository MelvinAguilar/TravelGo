import classes from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, modifierClass, className, ...rest }) => {
  return (
    <Link className={`${classes["Button"]} ${classes[modifierClass]} ${className}`} {...rest}>
        {children}
    </Link>
  );
};

export default ButtonLink;
