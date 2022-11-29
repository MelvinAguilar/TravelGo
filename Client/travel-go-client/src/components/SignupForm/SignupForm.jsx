import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UseAuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import classes from "./SignupForm.module.scss";
import InputField from "../Form/InputField/InputField";
import Form from "../Form/Form";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import Button from "../Button/Button";

import { Person, Envelope, Eye, EyeSlash } from "react-bootstrap-icons";


const SignupForm = () => {
  const navigateTo = useNavigate();
  const {singup, token, user } = UseAuthContext();

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

  // useEffect(() => {
  //   if (user) {
  //     navigateTo("/");
  //   }
  // }, [user, navigateTo]);

  const onSubmit = async(data)=>{
    const {name, email, password, date_birth, phone} = data;
    await singup(name, email, password, date_birth, phone);
    
    // if (token && token !== "null") {
    //   navigateTo("/");
    // }
  }

  // When the form is submitted, but there are errors
  const onInvalid = () => {
    toast.warn("Please check your fields and try again", {
      toastId: "warning"
    });
  };

  return (
    <Form className={classes["SignupForm"]} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <label htmlFor="name">Nombre</label>
      <InputField
        id="name"
        name="name"
        aria-invalid={errors.name ? "true" : "false"}
        innerRef={{...register("name", { required: true })}}
        validation={errors.name}
        placeholder={"e.g. John Doe"}
        icon={<Person />}
        type="text"
      >
        {errors.name?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
      </InputField>

      <label htmlFor="email">Correo electrónico</label>
      <InputField
        id="email"
        name="email"
        aria-invalid={errors.email ? "true" : "false"}
        innerRef={{...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }) }}
        validation={errors.email}
        placeholder={"e.g. hellotravelgo@hotmail.com"}
        icon={<Envelope />}
        type="email"
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

      <label htmlFor="date_birth">Fecha de nacimiento</label>
      <InputField
        id="date_birth"
        name="date_birth"
        aria-invalid={errors.date_birth ? "true" : "false"}
        innerRef={{...register("date_birth", { required: true })}}
        validation={errors.date_birth}
        placeholder={"e.g. 1999-12-31"}
        type="date"
      >
        {errors.date_birth?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
      </InputField>

      <label htmlFor="phone">Telefono</label>
      <InputField
        id="phone"
        name="phone"
        aria-invalid={errors.phone ? "true" : "false"}
        innerRef={{...register("phone", { required: true })}}
        validation={errors.phone}
        placeholder={"e.g. 123456789"}
        icon={<Person />}
        type="text"
      >
        {errors.phone?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
      </InputField>

      <Button type="submit">Registrarse</Button>
    </Form>
  );
};

export default SignupForm;
