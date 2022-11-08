import classes from "./Header.module.scss";
import logo from "../../assets/logo_light-mode.svg";
import Navbar from "./Navbar/Navbar";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={classes["Header"]}>
      <img src={logo} alt="Travel Go" className={classes["Header__logo"]} />

      <Navbar />

      <Button modifierClass="Button--white">Iniciar sesión</Button>
    </header>
  );
};  

export default Header;
