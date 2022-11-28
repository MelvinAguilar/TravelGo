import classes from "./FormGroupInput.module.scss";

const FormGroupInput = ({
  label,
  type,
  name,
  value,
  onFocus,
  placeholder,
  required,
}) => {
  return (
    <div className={classes["FormGroupInput"]}
    >
      <label className={classes["FormGroupInput__label"]} htmlFor={name}
      >
        {label}
      </label>
      <input
        className={classes["FormGroupInput__input"]}
        type={type}
        name={name}
        defaultValue={value}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

//background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat right;
//background-size: 20px;
//padding-right: 25px;
export default FormGroupInput;
