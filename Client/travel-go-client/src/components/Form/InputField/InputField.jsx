import classes from "./InputField.module.scss";

const InputField = ({ children, className, icon, validation, innerRef, ...rest }) => {
  return (
    <div className={
      `${classes["Input"]} ${className}`
    }>
      <input className={`${validation ? classes["has-error"] : ""} ${icon ? classes["has-icon"] : ""}`}
      {...rest} {...innerRef} />
      {icon}
      
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default InputField;
