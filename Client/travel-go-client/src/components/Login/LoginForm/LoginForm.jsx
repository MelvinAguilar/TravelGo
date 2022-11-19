import classes from "./LoginForm.module.scss";
import InputField from "./../../Form/InputField/InputField";
import Form from "./../../Form/Form";
import Button from "./../../Button/Button";
import ErrorMessage from "../../Form/ErrorMessage/ErrorMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Person, Eye, EyeSlash } from "react-bootstrap-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordButton = (
    <button onClick={togglePassword} type="button">
      {showPassword ? <Eye /> : <EyeSlash />}
    </button>
  );

  // Create a function to handle the form submission
  const onSubmit = (data) => {
    console.log("Submitted");
    // 
    // TO DO: Send the data
    // 
  };

  // When the form is submitted, but there are errors
  const onInvalid = (error) => {
    toast.warn("Please check your fields and try again", {
      toastId: "warning"
    });
  };

  return (
    <Form className={classes["LoginForm"]} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <label htmlFor="email">Correo electrónico</label>
      <InputField
        id={"email"}
        name={"email"}
        aria-invalid={errors.email ? "true" : "false"}
        innerRef={{...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }) }}
        validation={errors.email}
        placeholder={"e.g. hellotravelgo@hotmail.com"}
        icon={<Person />}
        type={"email"}
      >
        {errors.email?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
        {errors.email?.type === "pattern" && (<ErrorMessage>Por favor ingrese un correo electrónico válido</ErrorMessage>)}
      </InputField>

      <label htmlFor="password">Contraseña</label>
      <InputField
        id={"password"}
        name={"password"}
        aria-invalid={errors.password ? "true" : "false"}
        innerRef={{ ...register("password", { required: true }) }}
        validation={errors.password}
        placeholder={"**********"}
        icon={togglePasswordButton}
        type={showPassword ? "text" : "password"}
        autoComplete={"off"}
      />
        {errors.password?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
      <Button type="submit">Iniciar sesión</Button>
    </Form>
  );
};

export default LoginForm;
