import Form from "./../../../Form/Form";
import classes from "./CommentsForm.module.scss";
import TextareaField from "./../../../Form/TextareaField/TextareaField";
import ErrorMessage from "./../../../Form/ErrorMessage/ErrorMessage";
import StarRating from "../../../Form/StarRating/StarRating";
import Button from "../../../Button/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const CommentsForm = ({ onAddComment = () => {} , user }) => {
  const [rating, setRating] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  
  // Create a function to handle the form submission
  const onSubmit = (data) => {
    const { comment } = data;
    onAddComment(comment, rating); //({ comment, rating });
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
      <legend>Califica este trip</legend>
      <StarRating
        onUpdate={setRating}
        innerRef={{...register("star", { required: true })}}
      />
      {errors.star?.type === "required" && (
        <ErrorMessage>Debes seleccionar una calificación</ErrorMessage>
      )}
      <div className={classes["Comments-form__user"]}>
        <img src={user.imagen} alt={user.nombre} className={classes["Comments-form__avatar"]} />
        <p className={classes["Comments-form__name"]}>{user.nombre}</p>
      </div>
      
      <TextareaField
        id={"comment"}
        name={"comment"}
        className={classes["Comments-form__comment"]}
        aria-invalid={errors.comment ? "true" : "false"}
        innerRef={{
          ...register("comment", {
            required: true,
            maxLength: 230,
            pattern: /\S/,
          }),
        }}
        validation={errors.comment}
        placeholder={"Escribe tu comentario"}
        type={"text"}
        rows="4"
      >
        {errors.comment?.type === "required" && (<ErrorMessage>Este campo es requerido</ErrorMessage>)}
        {errors.comment?.type === "maxLength" && (<ErrorMessage>El mensaje no puede tener más de 230 caracteres</ErrorMessage>)}
        {errors.comment?.type === "pattern" && (<ErrorMessage>Este campo no puede estar vacío</ErrorMessage>)}
      </TextareaField>
      <Button type="submit" modifierClass="Button--purple" className={classes["Comments-form__button"]}>Enviar</Button>
    </Form>
  );
};

export default CommentsForm;
