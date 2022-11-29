import classes from "./Form.module.scss";

const Form = ({ children, className, ...props }) => {
  return <form className={`${classes["Form"]} ${className}`} {...props}>{children}</form>;
};

export default Form;
