import Form from "./../../../Form/Form";
import classes from "./CommentsForm.module.scss";
import TextareaField from "./../../../Form/TextareaField/TextareaField";
import ErrorMessage from "./../../../Form/ErrorMessage/ErrorMessage";
import StarRating from "../../../Form/StarRating/StarRating";
import Button from "../../../Button/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const comments = {
  usuario: "John el mas john",
  fecha: "14 de agosto de 2022",
  comentario:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sodales suscipit. Aenean auctor nunc sit amet lacus auctor rutrum. Nunc at dictum tortor. Nunc sit amet lectus varius, vulputate ligula et, commodo nibh.",
};

const CommentsForm = ({ onAddComment = () => {} }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = (data) => {
    onAddComment(data);
  };

  // When the form is submitted, but there are errors
  const onInvalid = (error) => {
    toast.warn("Please check your fields and try again", {
      toastId: "warning",
    });
  };

  return (
    <Form
      className={classes["Comments-form"]}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <legend>Califisca este trip</legend>
       <StarRating
        innerRef={{...register("star", { required: true })}}
      />
      {errors.star?.type === "required" && (
        <ErrorMessage>Debes seleccionar una calificación</ErrorMessage>
      )}
      
      <TextareaField
        id={"comment"}
        name={"comment"}
        className={classes["Comments-form__comment"]}
        aria-invalid={errors.comment ? "true" : "false"}
        innerRef={{ ...register("comment", { required: true }) }}
        validation={errors.comment}
        placeholder={"Escribe tu comentario"}
        type={"text"}
      >
        {errors.comment?.type === "required" && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </TextareaField>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default CommentsForm;
