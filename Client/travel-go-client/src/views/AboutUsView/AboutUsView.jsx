import classes from "./AboutUsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import intro from "./../../assets/intro_pic.png";

const AboutUsView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["AboutUs"]} {...rest}>
          
          <div className={classes["AboutUs__content"]}>
            <div className={classes["AboutUs__introduction"]}>
 
              <p className={classes["AboutUs__intro-text"]}>
              <h1 className={classes["AboutUs__title"]}>¡Conoce más sobre nosotros!</h1> 

              <b><span>Quienes somos</span></b>
              <br></br>
              Somos un grupo de estudiantes de ingenieria informática de la Universidad Jose Simeon
              Cañas, UCA. Actualmente estamos  cursando la materia de Web Devolpment, nos hemos unido para crear una aplicación web que
              permita a los usuarios encontrar lugares turísticos en El
              Salvador. 
              Esta aplicación fue creada con el fin de ayudar a los
              usuarios a encontrar lugares turísticos en El Salvador, y
              brindarles información sobre estos lugares.
              </p>
                <div className={classes["AboutUs__pic"]}>
                  <img src={intro} alt="" aria-hidden="true"/>
              </div>            
            </div>
<br></br>

            <div className={classes["AboutUs__content-mision"]}>
              <div className={classes["AboutUs__mision-vision"]}>
                <div className={classes["AboutUs__mision"]}>
                <b><span>Misión</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región, así como poner en el mapa los lugares mágicos y poco concurridos de El Salvador, promoviendo el turismo nacional y generando empleos directos e indirectos.

                </p>
                </div>
                <div className={classes["AboutUs__vision"]}>
                <b><span>Vísion</span></b>
                <br></br>
                <p>Creemos que te mereces una experiencia de viaje completa, es por eso que cada  trip es cuidadosamente armado para tu completo disfute. Ten por seguro que en cada aventura que escojas podrás apreciar el legado cultural de los pueblos salvadoreños, su riqueza naturas y sus tradiciones, ser parte del consumir local miestras practicas el ecoturismo.
                </p>
                </div>
              </div>
            </div>

            <div className={classes["AboutUs__content-values"]}>
               <div className={classes["AboutUs__values"]}>
                <b><span>Comunidad y Medio Ambiente</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
                <b><span>Satisfacción del consumidor</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
              </div>
              <div className={classes["AboutUs__values"]}>
                <b><span>Experiencia de servicio 360</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
                <b><span>Innovación y diversidad</span></b>
                <br></br>
                <p>Buscamos generar un impacto social a través del  turismo, nuestro objetivo principal es incrementar la actividad turística en la región.
                </p>
              </div>
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
