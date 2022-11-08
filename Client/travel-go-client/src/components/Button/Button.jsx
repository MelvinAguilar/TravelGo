import classes from "./Button.module.scss";

const Button = ({ children, type, className, ...rest }) => {
  return (
    <button className={`${classes["Button"]} ${className}`} {...rest} type={type}>
      {children}
    </button>
  );
};

export default Button;
