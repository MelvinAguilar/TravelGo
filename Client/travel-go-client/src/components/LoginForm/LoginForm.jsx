import classes from "./LoginForm.module.scss";
import InputField from "../Form/InputField/InputField";
import Form from "../Form/Form";
import Button from "../Button/Button";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Person, Eye, EyeSlash } from "react-bootstrap-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useConfigContext } from "../../contexts/ConfigContext";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const [ showPassword, setShowPassword ] = useState(false);
  const { startLoading, stopLoading } = useConfigContext();
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
  const onSubmit = async(data) => {
    const {email, password} = data;
      try {
        startLoading();

        const response = await axios.post("/singin", {email, password});
        const rolUser = await axios.get('/user/rol/', {
          headers:{
            Authorization: `Bearer ${response.data.token}`,
          }
        });
        const data = {
          "token": response.data.token,
          "roles": rolUser.data
        }
        saveIntoSessionStorage(data);
        navigateTo('/');
      } catch(error){
        const {status} = error.response;
        const msg = {
          "400": ":( Wrong fields",
          "404": "Email no registrado",
          "401": "Contraseña incorrecta",
          "500": "¡Ups! Algo salió mal",
        }
        toast.error(msg[status.toString()] || "unexpected error", {
          toastId: "loginError",
        });
      } finally {
        stopLoading();
      }
  };

  // When the form is submitted, but there are errors
  const onInvalid = () => {
    toast.warn("Revisa bien tus datos e intenta de nuevo, por favor", {
      toastId: "warning"
    });
  };

  //save token in session storage
  const saveIntoSessionStorage = (data)=>{
    sessionStorage.setItem("userToken", data.token);
    sessionStorage.setItem("userRol", data.roles);
    sessionStorage.setItem("session", true);
  }

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
        {errors.email?.type === "required" && (<ErrorMessage>¡Hey! Este campo es requerido</ErrorMessage>)}
        {errors.email?.type === "pattern" && (<ErrorMessage>Por favor, ingresa un correo electrónico válido</ErrorMessage>)}
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
        {errors.password?.type === "required" && (<ErrorMessage>¡Hey! Este campo es requerido</ErrorMessage>)}
      <Button type="submit">Iniciar sesión</Button>
    </Form>
  );
};

export default LoginForm;
