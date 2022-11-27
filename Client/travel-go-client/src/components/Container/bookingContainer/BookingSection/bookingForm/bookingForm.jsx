import Form  from "../../../../Form/Form";
import FormGroupInput from "./bookingForm/FormGroupInput/FormGroupInput";
import Button from "../../../../Button/Button";
import {StarFill} from "react-bootstrap-icons"
import classes from "./bookingForm.module.scss";
import {shoppingCartApi} from "../../../../../Server/shoppingCartServer";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import axios from "axios";


const BookingForm = ({placeInformation})=>{
    const {postShoppingItem} = shoppingCartApi();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    

      const onSubmitHandler = async(data)=>{
        const {fecha_inicio, fecha_final, cant_personas} = data;

        const precio_total = cant_personas * precio_unitario;

        const item = {
            "id_lugar": "insertar_dato",
            "cant_personas": cant_personas,
            "fecha": new Date(),
            "fecha_incio": fecha_inicio,
            "fecha_final": fecha_final,
            "precio_unitario": 0
        }

        await postShoppingItem(precio_total, item);
    }
    
      const onInvalid = () => {
        toast.warn("Please check your fields and try again", {
          toastId: "warning"
        });
      };

    let getDate = new Date();
    getDate.setDate(getDate.getDate() + 3)
    return(
    <div className={classes["booking-form"]}>
        <Form onSubmit={handleSubmit(onSubmitHandler, onInvalid)}>
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
