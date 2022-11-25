import { useState } from "react";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import classes from "./SignupForm.module.scss";
import InputField from "../Form/InputField/InputField";
import Form from "../Form/Form";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import Button from "../Button/Button";

import { Person, Envelope, Eye, EyeSlash } from "react-bootstrap-icons";
import axios from "axios";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const ref = useRef();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordButton = (
    <button onClick={togglePassword} type="button">
      {showPassword ? <Eye /> : <EyeSlash />}
    </button>
  );

  const onSubmit = async(data)=>{
    // e.preventDefault();
    const {name, email, password, date_birth, phone} = data;
    await newUser(name, email, password, date_birth, phone);
    // const data = new FormData(e.target);
    // await newUser(data.get("name"), data.get("email"), data.get("password"), data.get("date_birth"), data.get("phone"));
    // e.target.reset();
  }

  // When the form is submitted, but there are errors
  const onInvalid = () => {
    toast.warn("Please check your fields and try again", {
      toastId: "warning"
    });
  };

  const newUser = async(nombre, email, contrasenia_hash, fec_nacimiento, telefono)=>{
      try {
        await axios.post("/singup", { nombre, email, contrasenia_hash, fec_nacimiento, telefono });
        // .then((response)=>{
        //   console.log(response);
        // });
        console.log("usuario registrado");
      }
      catch(error){
        console.log(error);
        console.log("------------------");

        // const {status} = error.response;
        // const msg = {
        //   "400": "Wrong fields",
        //   "404": "Not found",
        //   "409": "Email and name already exist",
        //   "500": "Something went wrong!",
        // }
        // toast.error(msg[status.toString()] || "unexpected error", {
        //   toastId: "signupError",
        // });
      }
  }

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
