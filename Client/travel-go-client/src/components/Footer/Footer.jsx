import classes from "./Footer.module.scss";
import Form from "../Form/Form";
import FormGroupInput from "../Form/FormGroupInput/FormGroupInput";
import FormGroupTextarea from "../Form/FormGroupTextarea/FormGroupTextarea";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className={classes["Footer"]}>
      <div className={classes["Footer__content"]}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            corporis officiis quas hic blanditiis non dolore quia accusamus
            labore voluptatum laudantium omnis, tempora mollitia nulla
            consequatur necessitatibus quo libero! Aut?
          </p>
        </div>
        <div>
          <address>
            <p>Follow us</p>
            <a href="mailto:hellotravelgo.com">hellotravelgo.com</a>
          </address>
          <Form>
            <FormGroupInput
              label="Usuario"
              type="text"
              name="user"
              placeholder=" "
            />
            <FormGroupInput
              label="Email"
              type="email"
              name="email"
              placeholder=" "
              required={true}
            />
            <FormGroupTextarea
              label="Mensaje"
              name="message"
              placeholder=" "
              rows="5"
              required={true}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </div>
      </div>

      <div className={classes["Footer__copy"]}>
        <p>© TRAVELGO 2022 by Los Fullstack</p>
      </div>
    </footer>
  );
};

export default Footer;
