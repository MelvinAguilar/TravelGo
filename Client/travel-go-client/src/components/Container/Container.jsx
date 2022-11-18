import classes from "./Container.module.scss";

const Container = ({ children, className, ...rest }) => {
  return (
    <div className={`${classes["Container"]} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;