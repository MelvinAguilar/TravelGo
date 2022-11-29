import classes from "./FeatureContainer.module.scss";
import Button from "./../../../Button/Button";
import mockup from "./../../../../assets/shape.svg";
import chill from "./../../../../assets/chill.png";
import relax from "./../../../../assets/relax.png";
import share from "./../../../../assets/share.png";
import explore from "./../../../../assets/explore.png";
import {Flower1} from "react-bootstrap-icons";


const FeatureContainer = () => {
  return (
    <section className={classes["FeatureContainer"]}>
      <div className={classes["FeatureContainer__shape"]}>
      <img src={mockup}  alt="" aria-hidden="true" />
      </div>
      <div className={classes["FeatureContainer__title"]}>

        <h2>Go solo,
        and enjoy 
        your time.</h2>

        <p> Descubrí las maravillas que te ofrece tu trip, un paso a la vez. Durante tu estadía en un lugar, conocerás a profundidad lo que tiene que ofrecerte, sin preocuparte, solo disfrutando de tu tiempo en ese lugar.</p>
      </div>
    
      <div className={classes["FeatureContainer__content"]}>

       <div className={classes["FeatureContainer__cards"]}>

          <div className={classes["FeatureContainer__card"]}>
              <div className={classes["FeatureContainer__pic"]}>
                  <img src={chill} alt="" aria-hidden="true"/>
              </div> 

            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Chill</h2>
            <p>Disfruta de tu trip</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}>
            <div className={classes["FeatureContainer__pic"]}>
              <img src={share} alt="" aria-hidden="true"/>          
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Comparte</h2>
              <p>con tus amigos</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}>
            <div className={classes["FeatureContainer__pic"]}>
              <img src={relax} alt="" aria-hidden="true"/>          
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Relax</h2>
              <p>No pienses en nada más</p>
            </div>
          </div>

          <div className={classes["FeatureContainer__card"]}> 
            <div className={classes["FeatureContainer__pic"]}>
              <img src={explore} alt="" aria-hidden="true"/> 
            </div> 
            <div className={classes["FeatureContainer__text-card"]}>
              <h2>Explora</h2>
              <p>Encuentra tu aventura</p>
            </div>
          </div>
       </div>

       <div className={classes["FeatureContainer__feature"]}>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--baby_blue"><p>%</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Cuidamos tus bolsillo</h2>
          <p>Los precios están pensados para ser accesibles para cualquier viajero, buscamos acercarte cada vez más a tu trip ideal, sin tener que sacrificar gran parte de tu presupuesto.</p>
          </div>
          </div>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--cute_pink"><p>🞖</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Lugares mágicos</h2>
          <p>Cada lugar es cuidadosamente seleccionado pór nuestro equipo, por lo que cada vez que escojas tu trip, te llevarás un lugar secreto que guarda El Salvador</p>
          </div>
          </div>
          <div className={classes["FeatureContainer__info"]}>
            <div className={classes["FeatureContainer__icon"]}>
            <Button modifierClass="Button--light_yellow"><p>❤</p></Button>
          </div>
            <div className={classes["FeatureContainer__text"]}>
          <h2>Cuidamos tus bolsillo</h2>
          <p>Los precios están pensados para ser accesibles para cualquier viajero, buscamos acercarte cada vez más a tu trip ideal, sin tener que sacrificar gran parte de tu presupuesto.</p>
          </div>
          </div>

        </div>
       </div>






     

        

  
</section>
  );
};

export default FeatureContainer;
