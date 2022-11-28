import classes from "./FormGroupTextarea.module.scss";

const FormGroupTextarea = ({ children, className, label, nameGroup, validation, innerRef, ...rest }) => {
  // label, name, ...rest }) => {
  return (
    <div className={classes["FormGroupTextarea"]}>
      <textarea
        className={`${classes["FormGroupTextarea__area"]} ${
          validation ? classes["has-error"] : ""
        }`}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />  
      <label className={classes["FormGroupTextarea__label"]} htmlFor={nameGroup}>
        {label}
      </label>
      
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default FormGroupTextarea;
