import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({ children, label, modifierClass, nameGroup, ...rest }) => {
  return (
    <div className={`${classes["FormGroupInput"]} ${classes[modifierClass]}`}>
      <input className={classes["FormGroupInput__input"]} name={nameGroup} {...rest} />
      <label className={classes["FormGroupInput__label"]} htmlFor={nameGroup}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormGroupInput;
