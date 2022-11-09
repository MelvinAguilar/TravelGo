import classes from "./commentsContainer.module.scss";
import {StarFill} from "react-bootstrap-icons";
import Comment from "./comment/comment"
import Button from "../../../Button/Button";

const commentsContainer  = ()=>{

    return (
        <article className={classes["comments-article"]}>
            <div>
                <figure>
                    <StarFill/>
                </figure>
                <h2>4.7  ·  (100 reseñas)</h2>
            </div>
            <div className={classes["comments-container"]}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

            <Button className={classes["btn-mostrar-comentarios"]}>Mostrar 100 comentarios</Button>
        </article>

    )
}

export default commentsContainer;