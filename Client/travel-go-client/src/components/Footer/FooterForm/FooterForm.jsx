import classes from "./FooterForm.module.scss";
import Form from "./../../Form/Form";
import FormGroupInput from "./../../Form/FormGroupInput/FormGroupInput";
import FormGroupTextarea from "./../../Form/FormGroupTextarea/FormGroupTextarea";
import Button from "./../../Button/Button";

import { useForm } from "react-hook-form";
import ErrorMessage from "../../Form/ErrorMessage/ErrorMessage";
import { toast } from 'react-toastify';

import { Person, Envelope } from "react-bootstrap-icons";

const FooterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = (data) => {
    toast.success("¡Gracias por tus comentarios!", {
      toastId: "success"
    });

    // 
    // TO DO: Send the data
    // 
  };

  // When the form is submitted, but there are errors
  const onInvalid = (error) => {
    toast.toastId = "error";
    toast.warn("Please check your fields and try again", {
      toastId: "warning"
    });
  };

  return (
    <Form className={classes["FooterForm"]} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <fieldset>
        <legend className={classes["Subtitle"]}>Leave a message</legend>
        <FormGroupInput
          label="Usuario"
          name="user"
          placeholder=" "
          icon={<Person />}
          aria-invalid={errors.user ? "true" : "false"}
          innerRef={{...register("user", { required: true }) }}
          validation={errors.user}
          type="text"
        >
          {errors.user?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
        </FormGroupInput>

        <FormGroupInput
          label="Email"
          name="email"
          placeholder=" "
          icon={<Envelope />}
          aria-invalid={errors.email ? "true" : "false"}
          innerRef={{...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }) }}
          validation={errors.email}
          type="email"
        >
          {errors.email?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
          {errors.email?.type === "pattern" && (<ErrorMessage>Por favor ingrese un correo electrónico válido</ErrorMessage>)}
        </FormGroupInput>

        <FormGroupTextarea
          label="Mensaje"
          name="message"
          placeholder=" "
          rows="3"
          aria-invalid={errors.message ? "true" : "false"}
          innerRef={{...register("message", { required: true }) }}
          validation={errors.message}
        >
          {errors.message?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
        </FormGroupTextarea>

        <Button modifierClass="Button--white" type="submit">
          Enviar
        </Button>
      </fieldset>
    </Form>
  );
};

export default FooterForm;
