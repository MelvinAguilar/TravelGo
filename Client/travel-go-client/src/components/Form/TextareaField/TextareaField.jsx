import classes from "./TextareaField.module.scss";

const TextareaField = ({
  children,
  className,
  validation,
  innerRef,
  ...rest
}) => {
  return (
    <div className={`${classes["Textarea"]} ${className}`}>
      <textarea className={`${validation ? classes["has-error"] : ""}`}
        {...rest}
        {...innerRef}
      />
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default TextareaField;
