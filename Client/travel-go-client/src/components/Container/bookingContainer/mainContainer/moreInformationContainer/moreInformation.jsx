
import classes from "./moreinformation.module.scss";

const moreInformation = ({children})=>{
    return(
        <div className={classes["more-information"]}>
            {children}
        </div>
    );
}


export default moreInformation;