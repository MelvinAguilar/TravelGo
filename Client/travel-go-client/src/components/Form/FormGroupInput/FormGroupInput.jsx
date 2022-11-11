import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({ icon, label, modifierClass, nameGroup, ...rest }) => {
  return (
    <div className={`${classes["FormGroupInput"]} ${classes[modifierClass]}`}>
      <input className={classes["FormGroupInput__input"]} name={nameGroup} {...rest} />
      <label className={classes["FormGroupInput__label"]} htmlFor={nameGroup}>
        {label}
      </label>
      {icon}
    </div>
  );
};

export default FormGroupInput;
