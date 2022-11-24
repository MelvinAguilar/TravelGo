import BookingForm from "./bookingForm/bookingForm";
import BookingServices from "./BookingServices/BookingServices";
import classes from "./BookingSection.module.scss";

const BookingSection = ({placeInformation})=>{
    return(
        <section className={classes["booking-section"]}>
            <BookingServices services={placeInformation.etiquetas}/>
            <hr/>
            <BookingForm placeInformation={placeInformation}/>
        </section>
    )
}

export default BookingSection;