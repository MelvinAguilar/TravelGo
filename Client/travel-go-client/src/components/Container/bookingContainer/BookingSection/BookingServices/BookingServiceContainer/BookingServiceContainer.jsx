import classes from "./BookingServicesContainer.module.scss";

const BookingServiceContainer = ({children})=>{
    
    return(
        <div className={classes["service-container"]}>
            {children}
        </div>
    );
}

export default BookingServiceContainer;
