import { useState } from "react";

import classes from "./LoginForm.module.scss";
import InputField from "./../../Form/InputField/InputField";
import Form from "./../../Form/Form";
import Button from "./../../Button/Button";

import { Person, Eye, EyeSlash } from "react-bootstrap-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordButton = (
    <button onClick={togglePassword} type="button">
      {showPassword ? <Eye /> : <EyeSlash />}
    </button>
  );

  return (
    <Form className={classes["LoginForm"]}>
      <label htmlFor="email">Correo electrónico</label>
      <InputField
        modifierClass={"hasIcon"}
        placeholder={"e.g. hellotravelgo@hotmail.com"}
        icon={<Person />}
      />

      <label htmlFor="password">Contraseña</label>
      <InputField
        modifierClass={"hasIcon"}
        placeholder={"**********"}
        icon={togglePasswordButton}
        type={showPassword ? "text" : "password"}
      />

      <Button type="submit">Iniciar sesión</Button>
    </Form>
  );
};

export default LoginForm;
