import classes from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Login = () => {
  return (
    <div className={classes.Login}>
      <div className={classes.Login__container}>
        <Link to="/" className={classes.Login__back}>
          <ArrowLeft />
          Regresar a inicio
        </Link>
        
        <h2>Iniciar sesión</h2>
        <p>Inicie sesión para continuar</p>
        <LoginForm />
        
        <Link to="/register" className={classes.Login__signup}>¿No tienes una cuenta? Regístrate</Link>
      </div>
    </div>
  );
};

export default Login;
