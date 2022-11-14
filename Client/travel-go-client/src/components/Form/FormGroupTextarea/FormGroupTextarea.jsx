import classes from "./FormGroupTextarea.module.scss";

const FormGroupTextarea = ({ label, name, ...rest }) => {
  return (
    <div className={classes["FormGroupTextarea"]}>
      <textarea className={classes["FormGroupTextarea__input"]} name={name} {...rest} />
      <label className={classes["FormGroupTextarea__label"]} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormGroupTextarea;
