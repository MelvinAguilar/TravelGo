import { useState } from "react";

import classes from "./SignupForm.module.scss";
import InputField from "./../../Form/InputField/InputField";
import Form from "./../../Form/Form";
import Button from "./../../Button/Button";

import { Person, Envelope, Eye, EyeSlash } from "react-bootstrap-icons";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form className={classes["SignupForm"]}>
      <label htmlFor="name">Nombre</label>
      <InputField modifierClass={"hasIcon"} placeholder={"e.g. John Doe"}>
        <Person />
      </InputField>

      <label htmlFor="email">Correo electrónico</label>
      <InputField modifierClass={"hasIcon"} placeholder={"e.g. hellotravelgo@hotmail.com"}>
        <Envelope />
      </InputField>

      <label htmlFor="password">Contraseña</label>
      <InputField modifierClass={"hasIcon"} placeholder={"********"} type={showPassword ? "text" : "password"}>
        <button onClick={togglePassword} type="button">
          {showPassword ? <Eye /> : <EyeSlash />}
        </button>
      </InputField>

      <Button type="submit">Registrarse</Button>
    </Form>
  );
};

export default SignupForm;
