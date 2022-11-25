import { useState } from "react";
import React, {useRef} from "react";
//import bcrypt from "bcr"

import classes from "./SignupForm.module.scss";
import InputField from "./../../Form/InputField/InputField";
import Form from "./../../Form/Form";
import Button from "./../../Button/Button";

import { Person, Envelope, Eye, EyeSlash, ArrowThroughHeart } from "react-bootstrap-icons";
import axios from "axios";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordButton = (
    <button onClick={togglePassword} type="button">
      {showPassword ? <Eye /> : <EyeSlash />}
    </button>
  );

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    //await fetchingData();
    await newUser(data.get("name"), data.get("email"), data.get("password"), data.get("date_birth"), data.get("phone"));

  }

  const newUser = async(nombre, email, contrasenia_hash, fec_nacimiento, telefono)=>{
      try{
        await axios.post("/post/user", { nombre, email, contrasenia_hash, fec_nacimiento, telefono });
        console.log("bien");
      }

      catch(error){
        const {status} = error.response;
        const msg = {
          "400": "Wrong fields",
          "404": "Not found",
          "500": "Something went wrong!",
        }
        console.log(msg[status.toString()] || "unexpected error");
      }
  }
/*   const fetchingData = async()=>{
      try{
        const response = await axios.get("/user");

      }

      catch(error){
        console.log(error)
        console.log("mal no se")
      }
  } */

  return (
    <Form className={classes["SignupForm"]} onSubmit = {onSubmitHandler}>
      <label htmlFor="name">Nombre</label>
      <InputField
        modifierClass={"hasIcon"}
        placeholder={"e.g. John Doe"}
        icon={<Person />}
        name="name"
      />

      <label htmlFor="email">Correo electrónico</label>
      <InputField
        modifierClass={"hasIcon"}
        placeholder={"e.g. hellotravelgo@hotmail.com"}
        icon={<Envelope />}
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <InputField
        modifierClass={"hasIcon"}
        placeholder={"********"}
        type={showPassword ? "text" : "password"}
        icon={togglePasswordButton}
        name = "password"
      />

      <label htmlFor="date_birth">Fecha de nacimiento</label>
      <InputField
        type={"date"}
        name="date_birth"
      />

      <label htmlFor="phone">Telefono</label>
      <InputField
        placeholder={"e.g. 7655-4488"}
        name="phone"
      />
      <Button type="submit">Registrarse</Button>
    </Form>
  );
};

export default SignupForm;
