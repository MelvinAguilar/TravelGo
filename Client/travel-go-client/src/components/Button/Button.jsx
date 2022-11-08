import classes from "./Button.module.scss";

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`${classes["Button"]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
