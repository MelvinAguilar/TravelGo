import classes from "./InputField.module.scss";

const InputField = ({ children, modifierClass, className, ...rest }) => {
  return (
    <div className={`${classes["Input"]} ${classes[modifierClass]} ${className}`}>
        <input {...rest} />
        {children}
    </div>
  );
};

export default InputField;
