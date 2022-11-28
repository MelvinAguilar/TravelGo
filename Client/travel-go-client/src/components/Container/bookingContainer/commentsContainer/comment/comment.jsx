import classes from "./comment.module.scss";
import {PersonCircle} from "react-bootstrap-icons"

const Comment = ({commentInformation})=>{

    const dateFormat = (date)=>{
        try {
            const _date = new Date(date);
            return `${_date.getDate()} de ${months[_date.getMonth()+1]} de ${_date.getFullYear()}`;
        }
        catch(error){
            return 'Hace mucho tiempo';
        }
    }

    return(
        <div className={classes["comment-container"]}>
            <div className={classes["user-information"]}>
                <div className={classes["user-image"]}>
                    <PersonCircle/>
                </div>
                <div>
                    <h3>{commentInformation.user.nombre}</h3>
                    <p>{dateFormat(commentInformation.fecha)}</p>
                </div>
            </div>
            <p>
                {commentInformation.comentario}
            </p>
        </div>
    );
}

export default Comment;