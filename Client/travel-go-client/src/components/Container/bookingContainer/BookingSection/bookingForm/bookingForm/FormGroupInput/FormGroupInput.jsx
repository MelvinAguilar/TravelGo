import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({ children, className, icon, validation, innerRef, label, labelText, ...rest }) => {
  return (
    <div className={
      `${classes["FormGroupInput"]} ${className}`
    }>
      <label htmlFor={label} className={classes["FormGroupInput_label"]}>{labelText} </label>
      <input className={`${classes["FormGroupInput__input"]} ${validation ? classes["has-error"] : ""} ${icon ? classes["has-icon"] : ""}`}
      {...rest} {...innerRef} />
      {icon}
      
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default FormGroupInput;
