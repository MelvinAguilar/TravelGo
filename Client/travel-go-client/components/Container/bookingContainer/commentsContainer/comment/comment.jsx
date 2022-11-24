import classes from "./comment.module.scss";
import {PersonCircle} from "react-bootstrap-icons"

const Comment = ({commentInformation})=>{

    return(
        <div className={classes["comment-container"]}>
            <div className={classes["user-information"]}>
                <figure>
                    <PersonCircle/>
                </figure>
                <div>
                    <h3>{commentInformation.usuario}</h3>
                    {commentInformation.fecha}
                </div>
            </div>
            <div>
                {commentInformation.comentario}
            </div>
        </div>
    );
}

export default Comment;