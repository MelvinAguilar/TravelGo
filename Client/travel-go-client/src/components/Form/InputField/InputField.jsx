import classes from "./InputField.module.scss";

const InputField = ({ className, modifierClass, icon, ...rest }) => {
  return (
    <div className={`${classes["Input"]} ${classes[modifierClass]} ${className}`}>
        <input {...rest} />
        {icon}
    </div>
  );
};

export default InputField;
