import classes from "./BookingServices.module.scss";
import BookingServicesContainer from "./BookingServiceContainer/BookingServiceContainer";
import {MoonStars, Camera2, Sun, TruckFront, Tree, CupStraw} from "react-bootstrap-icons";


const imagePicker = (service)=>{
    let image = "";
    switch (service){
        case "vista a la montaña":
            //image = <MoonStars/>
            break;
        case "escalar" || "montaña":
            //image = <MoonStars/>
            break;
        case "natación" || "balneario":
            //image = <MoonStars/>
            break;
        case "acampar":
            //image = <MoonStars/>
            break;
        case "fotografía":
            image = <Camera2/>;
            break;
        case "estadia":
            image = <MoonStars/>;
            break;
        case "soleado" || "playa":
            image = <Sun/>;
            break;
        case "transporte":
            image = <TruckFront/>;
            break;
        case "naturaleza" || "campo":
            image = <Tree/>;
            break;
        case "comida" || "bebida":
            image = <CupStraw/>;
            break;
    }
    return image;
}


const BookingServices = ({services = []})=>{

    const mappedServices = services.map((service, counter)=>{
            return(
                <BookingServicesContainer key={counter}>
                    {imagePicker(service.toLowerCase())}
                    <h3>{service}</h3>
                </BookingServicesContainer>

            );
        });

    return(
        <div className={classes["services-container"]}>
            {services.length > 0 ? mappedServices : <h3>No hay servicios adicionales</h3>}
        </div>
    );

}

export default BookingServices;