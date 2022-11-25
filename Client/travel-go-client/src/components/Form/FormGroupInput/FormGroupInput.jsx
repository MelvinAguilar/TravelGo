import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({
  children,
  className,
  label,
  nameGroup,
  icon,
  validation,
  innerRef,
  ...rest
}) => {
  return (
    <div className={`${classes["FormGroupInput"]} ${className}`}>
      <input
        className={`${classes["FormGroupInput__input"]} ${
          validation ? classes["has-error"] : ""
        } ${icon ? classes["has-icon"] : ""}`}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />
      <label className={classes["FormGroupInput__label"]} htmlFor={nameGroup}>
        {label}
      </label>
      {icon}

      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default FormGroupInput;
