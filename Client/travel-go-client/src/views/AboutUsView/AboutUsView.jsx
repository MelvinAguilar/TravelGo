import classes from "./AboutUsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

const AboutUsView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["AboutUs"]} {...rest}>
          <h1 className={classes["AboutUs__title"]}>Sobre nosotros</h1>

          <div className={classes["AboutUs__content"]}>
            <div className={classes["AboutUs__introduction"]}>
              <img
                className={classes["AboutUs__image"]}
                src="https://i.imgur.com/dxR8ma4.png"
                alt=""
                aria-hidden="true"
              />
              <p className={classes["AboutUs__intro-text"]}>
                Somos un grupo de estudiantes de la Universidad Jose Simeon
                Cañas que se encuentran cursando la materia de Ingeniería de
                informatica, que se unieron para crear una aplicación web que
                permita a los usuarios encontrar lugares turísticos en El
                Salvador. Esta aplicación fue creada con el fin de ayudar a los
                usuarios a encontrar lugares turísticos en El Salvador, y
                brindarles información sobre estos lugares.
              </p>
            </div>
            <p>
              Nuestro objetivo es que los usuarios puedan encontrar lugares
              turísticos en El Salvador, que puedan compartir sus comentarios
              sobre sus visitas a los lugares turísticos, y poder reservar
              estadías en los lugares turísticos. Nuestra aplicación web está
              hecha con React, Node.js, Express y MongoDB.
            </p>
            <p>
              Si quieres saber más sobre nosotros, puedes visitar nuestro
              GitHub:
            </p>
            <ul className={classes["AboutUs__links"]}>
              <li>
                <a
                  href="https://github.com/cam-vasquez"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Fernanda Camila Vásquez Meléndez
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MelvinAguilar"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Melvin Armando Aguilar Hernández
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/HenryLima07"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Henry Eduardo Escobar Lima
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <FooterAttribution />
    </>
  );
};

export default AboutUsView;
