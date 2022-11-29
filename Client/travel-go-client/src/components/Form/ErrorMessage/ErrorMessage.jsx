import classes from "./ErrorMessage.module.scss";
import { ExclamationCircle } from "react-bootstrap-icons";

const ErrorMessage = ({ children, className, ...props }) => {
  return (
    <span className={`${classes["ErrorMessage"]} ${className}`} {...props} role="alert">
      <ExclamationCircle />
      {children}
    </span>
  );
};

export default ErrorMessage;
