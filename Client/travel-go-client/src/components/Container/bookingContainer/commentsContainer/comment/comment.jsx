import classes from "./comment.module.scss";
import {PersonCircle} from "react-bootstrap-icons"

const months = {
    "01": 'enero',
    "02": 'febrero',
    "03": 'marzo',
    "04": 'abril',
    "05": 'mayo',
    "06": 'junio',
    "07": 'julio',
    "08": 'agosto',
    "09": 'septiembre',
    "10": 'octubre',
    "11": 'noviembre',
    "12": 'diciembre',
}

const Comment = ({commentInformation})=>{

    const dateFormat = (date)=>{
        date = new Date(date);
        try{
            const commentDate = `${date.getDay()} de ${months[date.getMonth().toString()]} de ${date.getFullYear()}`;
            return commentDate;
        }
        catch(error){
            return '01 de enero de 2022';
        }
    }

    return(
        <div className={classes["comment-container"]}>
            <div className={classes["user-information"]}>
                <figure>
                    <PersonCircle/>
                </figure>
                <div>
                    <h3>{commentInformation.user.nombre}</h3>
                    {dateFormat(commentInformation.fecha)}
                </div>
            </div>
            <div>
                {commentInformation.comentario}
            </div>
        </div>
    );
}

export default Comment;