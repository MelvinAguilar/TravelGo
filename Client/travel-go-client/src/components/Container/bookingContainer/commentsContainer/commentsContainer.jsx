import classes from "./commentsContainer.module.scss";
import {StarFill} from "react-bootstrap-icons";
import Comment from "./comment/comment"
import Button from "../../../Button/Button";

const commentsContainer  = ({commentsInformation, cant_comentarios, puntuacion_prom})=>{
    const mappedComentarios = commentsInformation.map((comentario, counter)=>{
        return(
            <Comment commentInformation = {comentario} key={comentario._id}/>
        );
    });
    
    return (
        <section className={classes["comments-article"]}>
            <div>
                <div>
                    <StarFill/>
                </div>
                <h2>
                    Reseñas
                </h2>
            </div>
            <div className={classes["comments-container"]}>
                {mappedComentarios}
            </div>

            <Button className={classes["btn-mostrar-comentarios"]}>Mostrar más comentarios</Button>
        </section>

    )
}

export default commentsContainer;