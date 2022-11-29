import classes from "./Button.module.scss";

const Button = ({ children, modifierClass = "", className = "", ...rest }) => {
  return (
    <button className={`${classes["Button"]} ${classes[modifierClass]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
