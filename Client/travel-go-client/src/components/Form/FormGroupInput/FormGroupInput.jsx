import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className={classes["FormGroupInput"]}>
      <input
        className={classes["FormGroupInput__input"]}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <label className={classes["FormGroupInput__label"]} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormGroupInput;
