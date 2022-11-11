import classes from "./Signup.module.scss";
import SignupForm from "./SignupForm/SignupForm";

import { ArrowLeft } from "react-bootstrap-icons";

const Signup = () => {
  return (
    <div className={classes.Signup}>
      <div className={classes.Signup__container}>
        <a href="#" className={classes.Signup__back}>
          <ArrowLeft />
          Regresar
        </a>
        <h2>Registrarse</h2>
        <p>Llena tus datos para registrate</p>
        <SignupForm />

        <a href="#" className={classes.Signup__login}>
          Iniciar sesión
        </a>
      </div>
    </div>
  );
};

export default Signup;
