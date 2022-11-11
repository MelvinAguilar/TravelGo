import classes from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

import { ArrowLeft } from "react-bootstrap-icons";

const Login = () => {
  return (
    <div className={classes.Login}>
      <div className={classes.Login__container}>
        <a href="#" className={classes.Login__back}>
          <ArrowLeft />
          Regresar
        </a>
        <h2>Iniciar sesión</h2>
        <p>Inicie sesión para continuar</p>
        <LoginForm />
        {/* <a href="#">¿Olvidaste tu contraseña?</a> */}
        <a href="#" className={classes.Login__signup}>
          ¿No tienes una cuenta? Regístrate
        </a>
      </div>
    </div>
  );
};

export default Login;
