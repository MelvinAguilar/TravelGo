import classes from "./AboutUsView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";
import intro from "./../../assets/intro_pic.png";
import mongo from "./../../assets/mongo.png";
import react from "./../../assets/react.png";
import node from "./../../assets/node.png";
import express from "./../../assets/express.png";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/Button/Button";




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

        

          <div className={classes["AboutUs__content-techs"]}>
            <br></br>
            <h1 className={classes["AboutUs__title"]}>Tecnologias que hacen posible la magia</h1> 
            <div className={classes["AboutUs__card-tech"]}>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={mongo} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>MongoDB</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={react} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>React</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={express} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>Express</h2>
              </div>
              <div className={classes["AboutUs__tech"]}>
                  <div className={classes["AboutUs__pic-tech"]}>
                    <img src={node} alt="" aria-hidden="true"/>
                  </div>            
                    <h2>Node</h2>
              </div>
          </div>
          
          </div>

          <div className={classes["AboutUs__content-nosotros"]}>
              <div className={classes["AboutUs__github"]}>
                <div className={classes["AboutUs__info"]}>
                <h1 className={classes["AboutUs__title"]}>¿Quieres saber más de nosotrsos?</h1>   
                <p>Si te interesa conocer más acerca de lo que hacemos y de como funciona TRAVELGO, puedes visitar nuestros respositorios de GitHub. Si te interesa conocer más acerca de lo que hacemos y de como funciona TRAVELGO, puedes visitar nuestros respositorios de GitHub. Si te interesa conocer más acerca de lo que hacemos 
                </p>
                </div>
                <div className={classes["AboutUs__repos"]}>
          
                  <div className={classes["AboutUs__repos-git"]}>
                  <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--cute_pink"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Fernanda Vásquez</h2>
                <a href="https://github.com/cam-vasquez" target="_blank"  rel="noreferrer noopener">cam-vasquez</a>
                </div>
                </div>
                <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--light_yellow"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Melvin Aguilar</h2>
                <a href="https://github.com/MelvinAguilar" target="_blank"  rel="noreferrer noopener">MelvinAguilar</a>
                </div>
                </div>
                <div className={classes["AboutUs__text"]}>
                  <div className={classes["AboutUs__icon"]}>
                  <Button modifierClass="Button--baby_blue"><p>❤</p></Button>
                </div>
                <div className={classes["AboutUs__repo-link"]}>
                <h2>Henry Escobar</h2>
                <a href="https://github.com/HenryLima07" target="_blank"  rel="noreferrer noopener">HenryLima07</a>
                </div>
                </div>
               
                
                

              </div>

             

              </div>
            </div>
            </div>





          </div>
           
        </section>
      </main>
            <Footer></Footer>
    </>
  );
};

export default AboutUsView;
