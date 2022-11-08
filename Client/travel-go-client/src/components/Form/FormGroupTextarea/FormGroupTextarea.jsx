import classes from "./FormGroupTextarea.module.scss";

const FormGroupTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
  required,
}) => {
  return (
    <div className={classes["FormGroupTextarea"]}>
      <textarea
        className={classes["FormGroupTextarea__input"]}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
      <label className={classes["FormGroupTextarea__label"]} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormGroupTextarea;
