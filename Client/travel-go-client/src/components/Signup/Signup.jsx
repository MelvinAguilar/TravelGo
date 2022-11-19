import classes from "./Signup.module.scss";
import SignupForm from "./SignupForm/SignupForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Signup = () => {
  return (
    <div className={classes.Signup}>
      <div className={classes.Signup__container}>
        <Link to="/" className={classes.Signup__back}>
          <ArrowLeft />
          Regresar a inicio
        </Link>
        
        <h2>Registrarse</h2>
        <p>Llena tus datos para registrate</p>
        <SignupForm />

        <Link to="/login" className={classes.Signup__login}>¿Ya tienes una cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
};

export default Signup;
