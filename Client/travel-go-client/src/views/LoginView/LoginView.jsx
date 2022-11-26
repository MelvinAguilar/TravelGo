import classes from "./LoginView.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";


const LoginView = () => {

  return (
    <main className={classes.Login}>
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
    </main>
  );
};

export default LoginView;
