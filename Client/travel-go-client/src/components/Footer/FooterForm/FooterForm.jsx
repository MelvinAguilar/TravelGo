import classes from "./FooterForm.module.scss";
import Form from "./../../Form/Form";
import FormGroupInput from "./../../Form/FormGroupInput/FormGroupInput";
import FormGroupTextarea from "./../../Form/FormGroupTextarea/FormGroupTextarea";
import Button from "./../../Button/Button";

import { Person, Envelope, Eye, EyeSlash } from "react-bootstrap-icons";

const FooterForm = () => {
  return (
    <Form className={classes["FooterForm"]}>
      <fieldset>
        <legend className={classes["Subtitle"]}>Leave a message</legend>
        <FormGroupInput
          modifierClass={"hasIcon"}
          label="Usuario"
          type="text"
          name="user"
          placeholder=" "
          icon={<Person />}
        />
        <FormGroupInput
          modifierClass={"hasIcon"}
          label="Email"
          type="email"
          name="email"
          placeholder=" "
          required={true}
          icon={<Envelope />}
        />
        <FormGroupTextarea
          label="Mensaje"
          name="message"
          placeholder=" "
          rows="3"
          required={true}
        />
        <Button modifierClass="Button--white" type="submit">
          Enviar
        </Button>
      </fieldset>
    </Form>
  );
};

export default FooterForm;
