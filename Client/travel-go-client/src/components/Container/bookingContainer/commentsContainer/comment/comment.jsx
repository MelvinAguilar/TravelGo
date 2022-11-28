import classes from "./comment.module.scss";
import {PersonCircle} from "react-bootstrap-icons"

const months = {
    "01": 'enero', "02": 'febrero', "03": 'marzo', "04": 'abril', "05": 'mayo', "06": 'junio',
    "07": 'julio', "08": 'agosto', "09": 'septiembre', "10": 'octubre', "11": 'noviembre', "12": 'diciembre',
}

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