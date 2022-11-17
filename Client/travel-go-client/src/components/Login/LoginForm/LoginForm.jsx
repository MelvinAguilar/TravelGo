import { useState } from "react";
import { useForm } from 'react-hook-form';
import classes from "./LoginForm.module.scss";
import InputField from "./../../Form/InputField/InputField";
import Form from "./../../Form/Form";
import Button from "./../../Button/Button";

import { Person, Eye, EyeSlash } from "react-bootstrap-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordButton = (
    <button onClick={togglePassword} type="button">
      {showPassword ? <Eye /> : <EyeSlash />}
    </button>
  );

  const onSubmit = (data) => {
    console.log(data);
    // setData(data);
  };

  return (
    <Form className={classes["LoginForm"]} onSubmit={handleSubmit(onSubmit)}>
     {/* onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}> */}
      <label htmlFor="email">Correo electrónico</label>
      <InputField
        innerRef={{...register("email", { required: true })}}
        // {...register("email", { required: true })}
        modifierClass={"hasIcon"}
        placeholder={"e.g. hellotravelgo@hotmail.com"}
        icon={<Person />}
      />
      {errors.email?.type === "required" && <p>Este campo es requerido</p>}

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
