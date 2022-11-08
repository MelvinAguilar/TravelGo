import classes from "./Form.module.scss";

const Form = ({ children }) => {
  return <form className={classes["Form"]}>{children}</form>;
};

export default Form;
