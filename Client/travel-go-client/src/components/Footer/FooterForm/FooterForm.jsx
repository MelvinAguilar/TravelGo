import classes from "./FooterForm.module.scss";
import Form from "./../../Form/Form";
import FormGroupInput from "./../../Form/FormGroupInput/FormGroupInput";
import FormGroupTextarea from "./../../Form/FormGroupTextarea/FormGroupTextarea";
import Button from "./../../Button/Button";
import emailjs from "@emailjs/browser";
import ErrorMessage from "../../Form/ErrorMessage/ErrorMessage";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Person, Envelope } from "react-bootstrap-icons";

const FooterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = (data, e) => {
    e.preventDefault();

    // Send email
    try {
      emailjs.send(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        data,
        import.meta.env.VITE_MAIL_PUBLIC_KEY
      ).then((result) => {
          toast.success("¡Gracias por tus comentarios!", {
            toastId: "success",
          });

          reset(); // Reset forms
        });
    } catch (error) {
      console.log(error);
      toast.error("¡Ups! Algo salió mal", {
        toastId: "error",
      });
    }
  };

  // When the form is submitted, but there are errors
  const onInvalid = (error) => {
    toast.toastId = "error";
    toast.warn("Please check your fields and try again", {
      toastId: "warning",
    });
  };

  return (
    <Form
      className={classes["FooterForm"]}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <fieldset>
        <legend className={classes["Subtitle"]}>Dejános un mensaje</legend>
        <FormGroupInput
          label="Usuario"
          name="user"
          placeholder=" "
          icon={<Person />}
          aria-invalid={errors.user ? "true" : "false"}
          innerRef={{ ...register("user", { required: true, pattern: /\S/ }) }}
          validation={errors.user}
          type="text"
        >
          {errors.user?.type === "required" && (<ErrorMessage>¡Hey!, Este campo es requerido</ErrorMessage>)}
          {errors.user?.type === "pattern" && (<ErrorMessage>¡Hey!, Este campo no puede estar vacío</ErrorMessage>)}
        </FormGroupInput>

        <FormGroupInput
          label="Email"
          name="email"
          placeholder=" "
          icon={<Envelope />}
          aria-invalid={errors.email ? "true" : "false"}
          innerRef={{
            ...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            }),
          }}
          validation={errors.email}
          type="email"
        >
          {errors.email?.type === "required" && (<ErrorMessage>¡Hey!, Este campo es requerido</ErrorMessage>)}
          {errors.email?.type === "pattern" && (<ErrorMessage>Por favor ingrese un correo electrónico válido</ErrorMessage>)}
        </FormGroupInput>

        <FormGroupTextarea
          label="Mensaje"
          name="message"
          placeholder=" "
          rows="3"
          aria-invalid={errors.message ? "true" : "false"}
          innerRef={{
            ...register("message", {
              required: true,
              maxLength: 230,
              pattern: /\S/,
            }),
          }}
          validation={errors.message}
        >
          {errors.message?.type === "required" && (<ErrorMessage>¡Hey!, Este campo es requerido</ErrorMessage>)}
          {errors.message?.type === "maxLength" && (<ErrorMessage>El mensaje no puede tener más de 230 caracteres</ErrorMessage>)}
          {errors.message?.type === "pattern" && (<ErrorMessage>Este campo no puede estar vacío</ErrorMessage>)}
        </FormGroupTextarea>

        <Button modifierClass="Button--white" type="submit">
          Enviar
        </Button>
      </fieldset>
    </Form>
  );
};

export default FooterForm;
