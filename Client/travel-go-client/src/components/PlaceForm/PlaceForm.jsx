import classes from "./PlaceForm.module.scss";
import Form from "../Form/Form";
import InputField from "../Form/InputField/InputField";
import TextareaField from "../Form/TextareaField/TextareaField";
import Button from "../Button/Button";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { WithContext as ReactTags } from "react-tag-input";

const PlaceForm = ({ onAddPlace = () => {} }) => {
  const tagsArray = [
    "Vista a la montaña",
    "Escalar",
    "Natación",
    "Acampar",
    "Fotografía",
    "Estadia",
    "Soleado",
    "Transporte",
    "Naturaleza",
    "Comida",
    "Cultura",
    "Historia",
    "Aventura",
    "Deportes",
    "Camping",
    "Ciclismo",
    "Senderismo",
    "Pesca",
    "Caza",
    "Caminata",
    "Cascada",
    "Cueva",
    "Lago",
    "Montaña",
    "Playa",
    "Río",
    "Roca",
    "Volcán",
    "Clima",
  ];

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const suggestions = tagsArray.map((tag) => {
    return {
      id: tag,
      text: tag,
    };
  });

  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleDeleteImage = (i) => {
    setImages(images.filter((image, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleAdditionImage = (image) => {
    setImages([...images, image]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleDragImage = (image, currPos, newPos) => {
    const newImages = images.slice();
    
    newImages.splice(currPos, 1);
    newImages.splice(newPos, 0, image);
    setImages(newImages);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = (data) => {
    onAddPlace(
      data.nombre,
      data.descripcion,
      data.imagen,
      data.precio,
      data.categoria,
      data.tags
    );
  };

  // When the form is submitted, but there are errors
  const onInvalid = (error) => {
    toast.warn("Please check your fields and try again", {
      toastId: "warning",
    });
  };

  return (
    <Form
      className={classes["PlaceForm"]}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <label htmlFor="nombre">Nombre</label>
      <InputField
        id={"nombre"}
        name={"nombre"}
        aria-invalid={errors.nombre ? "true" : "false"}
        innerRef={{ ...register("nombre", { required: true }) }}
        validation={errors.nombre}
        placeholder={"e.g. Cascada La Olomina · Arambala, Morazán"}
        type={"text"}
      >
        {errors.nombre?.type === "required" && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </InputField>

      <label htmlFor="descripcion_general">Descripción general</label>
      <TextareaField
        id={"descripcion_general"}
        name={"descripcion_general"}
        aria-invalid={errors.descripcion_general ? "true" : "false"}
        innerRef={{ ...register("descripcion_general", { required: true }) }}
        validation={errors.descripcion_general}
        placeholder={
          "e.g. A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest"
        }
        rows="6"
      >
        {errors.descripcion_general?.type === "required" && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </TextareaField>

      <label htmlFor="etiquetas">Etiquetas</label>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        autocomplete
        classNames={{
          tags: classes["ReactTags__tags"],
          tagInput: classes["ReactTags__tagInput"],
          tagInputField: classes["ReactTags__tagInputField"],
          selected: classes["ReactTags__selected"],
          tag: classes["ReactTags__tag"],
          remove: classes["ReactTags__remove"],
          suggestions: classes["ReactTags__suggestions"],
          activeSuggestion: classes["ReactTags__activeSuggestion"],
        }}
        editable={false}
      />

      <label htmlFor="precio">Precio</label>
      <InputField
        id={"precio"}
        name={"precio"}
        aria-invalid={errors.precio ? "true" : "false"}
        innerRef={{ ...register("precio", { required: true }) }}
        validation={errors.precio}
        placeholder={"e.g. 45.00"}
        type={"text"}
      >
        {errors.precio?.type === "required" && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </InputField>

      <label htmlFor="images">Imagenes</label>
      <ReactTags
          tags={images}
          handleDelete={handleDeleteImage}
          handleAddition={handleAdditionImage}
          handleDrag={handleDragImage}
          inputFieldPosition="bottom"
          onExistingTagClick={() => console.log('onExistingTagClick')}
          autocomplete
          classNames={{
            tags: classes["ReactTags__tags"],
            tagInput: classes["ReactTags__tagInput"],
            tagInputField: classes["ReactTags__tagInputField"],
            selected: classes["ReactTags__selected"],
            tag: classes["ReactTags__tag--url"],
            remove: classes["ReactTags__remove"],
            suggestions: classes["ReactTags__suggestions"],
            activeSuggestion: classes["ReactTags__activeSuggestion"]
          }}
          editable={false}
        />

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default PlaceForm;
