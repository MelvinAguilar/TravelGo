import Form  from "../../../../Form/Form";
import FormGroupInput from "./bookingForm/FormGroupInput/FormGroupInput";
import Button from "../../../../Button/Button";
import {StarFill} from "react-bootstrap-icons"
import classes from "./bookingForm.module.scss";





const BookingForm = ({placeInformation})=>{
    let getDate = new Date();
    getDate.setDate(getDate.getDate() + 3)
    return(
    <div className={classes["booking-form"]}>
        <Form>
            <div>
                <div>
                    <h2>${placeInformation.precio}</h2> USD
                </div>
                <div><StarFill/> {placeInformation.puntuacion_prom} · {placeInformation.cant_comentarios} reseñas</div>
            </div>
            <fieldset>
                <FormGroupInput 
                    label={"Fecha de llegada"}
                    type = {"date"}
                    required = {true}
                    value = {getDate.toLocaleDateString('en-CA')}
                />

                <FormGroupInput 
                    label={"Fecha de salida"}
                    type = {"date"}
                    required = {true}
                    value = {getDate.toLocaleDateString('en-CA')}

                />

                <FormGroupInput 
                    label={"Num de personas"}
                    type = {"number"}
                    placeholder ={`Num de personas`}
                    required = {true}
                />
            </fieldset>
            <Button modifierClass={'Button--pink'} type={"submit"}>Reservar ya</Button>
        </Form>
    </div>
    );
}

export default BookingForm;
