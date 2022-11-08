import classes from "./comment.module.scss";
import {PersonCircle} from "react-bootstrap-icons"

const Comment = ()=>{

    return(
        <div className={classes["comment-container"]}>
            <div className={classes["user-information"]}>
                <figure>
                    <PersonCircle/>
                </figure>
                <div>
                    <h3>John El John</h3>
                    14 de septiembre de 2022
                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sodales suscipit. Aenean auctor nunc sit amet lacus auctor rutrum. Nunc at dictum tortor. Nunc sit amet lectus varius, vulputate ligula et, commodo nibh. 
            </div>
        </div>
    );
}

export default Comment;