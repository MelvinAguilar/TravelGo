import classes from "./commentsContainer.module.scss";
import {StarFill} from "react-bootstrap-icons";
import Comment from "./comment/comment"
import Button from "../../../Button/Button";

const commentsContainer  = ({commentsInformation, cant_comentarios, puntuacion_prom})=>{
    const comentarios = [commentsInformation, commentsInformation, commentsInformation, commentsInformation, commentsInformation, commentsInformation]

    const mappedComentarios = comentarios.map((comentario, counter)=>{
        return(
            <Comment commentInformation = {comentario} key={counter}/>

        );
    });
    
    return (
        <section className={classes["comments-article"]}>
            <div>
                <figure>
                    <StarFill/>
                </figure>
                <h2>
                    {puntuacion_prom} · ({cant_comentarios} reseñas)
                </h2>
            </div>
            <div className={classes["comments-container"]}>
                {mappedComentarios}
            </div>

            <Button className={classes["btn-mostrar-comentarios"]}>Mostrar 100 comentarios</Button>
        </section>

    )
}

export default commentsContainer;