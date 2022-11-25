import { useState } from "react";

import classes from "./Header.module.scss";
import logo from "../../assets/logo_light-mode.svg";
import Navbar from "./Navbar/Navbar";
import ButtonLink from "../Button/ButtonLink/ButtonLink";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
  
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [inSession, setSession] = useState(false);
  const navigateTo = useNavigate();

  const userSession = ()=>{
    const data = sessionStorage.getItem("session");
    if(data) setSession(true);
    else setSession(false);
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handlerClick = (e)=>{
    console.log(inSession);
    if(inSession){
      sessionStorage.clear();
    }
    else
      navigateTo("/login");
  }


  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`${classes["Header"]} ${isSticky ? classes["Fixed"] : ""}`}  onLoad={userSession}>
      <Container>
        <Link to="/">
          <img src={logo} alt="TravelGo" className={classes["Header__logo"]} />
        </Link>

        <Navbar />

        <ButtonLink to = "/login" modifierClass="Button--white" onClick={handlerClick}>
          {(inSession) ? 'Cerrar sesión': 'Iniciar sesión'}
        </ButtonLink>
      </Container>
    </header>
  );
};

export default Header;
