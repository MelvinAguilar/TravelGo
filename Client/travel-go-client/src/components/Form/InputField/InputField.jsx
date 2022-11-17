import classes from "./InputField.module.scss";

const InputField = ({ className, modifierClass, icon, innerRef, ...rest }) => {
  return (
    <div className={`${classes["Input"]} ${classes[modifierClass]} ${className}`}>
        <input refs={innerRef} {...rest} />
        {icon}
    </div>
  );
};

export default InputField;
