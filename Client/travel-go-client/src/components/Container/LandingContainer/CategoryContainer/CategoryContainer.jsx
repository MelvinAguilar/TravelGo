import classes from "./CategoryContainer.module.scss";
import Button from "./../../../Button/Button";

import {Camera, Water,Sun,Tsunami,Map,Tree,CupStraw,Sunset} from "react-bootstrap-icons";



const CategoryContainer = () => {
  return (
    <section className={classes["CategoryContainer"]}>
      <div className={classes["CategoryContainer__title"]}>
        <h2>Explora lugares fantásticos según tus actividades favoritas</h2>
        <p>
          Un lugar no debe definirte, es por eso que puedes escoger tu trip segun tu hobby favorito. Divierte haciendo rappel en tus cascadas favoritas, has caminitas en tus lugares preferidos, surfea en las playas qeu bañan las costas, u observa paisajes y toma fotos perfetas en lugares de ensueño, nosotros te ayudamos a encontrar tu próxima aventura. 
        </p>
      </div>
      <div className={classes["CategoryContainer__categories"]}>
        <Button modifierClass={"Button--white"}><Tsunami/>surf</Button>
        <Button modifierClass={"Button--white"}><Camera/>paisajes</Button>
        <Button modifierClass={"Button--white"}><Camera/>hiking</Button>
        <Button modifierClass={"Button--white"}><Sunset/>atardecer</Button>
        <Button modifierClass={"Button--white"}><CupStraw/>comidita</Button>
        <Button modifierClass={"Button--white"}><Sun/>Playitas</Button>
        <Button modifierClass={"Button--white"}><Water/>nadar</Button>
        <Button modifierClass={"Button--white"}><Tree/>bosques</Button>
        <Button modifierClass={"Button--white"}><Map/>pueblos</Button>

        {/*  */}

        <Button modifierClass={"Button--white"}><Tsunami/>surf</Button>
        <Button modifierClass={"Button--white"}><Camera/>paisajes</Button>
        <Button modifierClass={"Button--white"}><Camera/>hiking</Button>
        <Button modifierClass={"Button--white"}><Sunset/>atardecer</Button>
        <Button modifierClass={"Button--white"}><CupStraw/>comidita</Button>
        <Button modifierClass={"Button--white"}><Sun/>Playitas</Button>
        <Button modifierClass={"Button--white"}><Water/>nadar</Button>
        <Button modifierClass={"Button--white"}><Tree/>bosques</Button>
        <Button modifierClass={"Button--white"}><Map/>pueblos</Button>
       
      
      </div>
    </section>
  );
};







export default CategoryContainer;
