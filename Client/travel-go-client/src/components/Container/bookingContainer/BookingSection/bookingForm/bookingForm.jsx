import Form  from "../../../../Form/Form";
import FormGroupInput from "./bookingForm/FormGroupInput/FormGroupInput";
import Button from "../../../../Button/Button";
import {StarFill} from "react-bootstrap-icons"
import classes from "./bookingForm.module.scss";
import {shoppingCartApi} from "../../../../../services/shoppingCartServer";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const BookingForm = ({placeInformation})=>{

    const {postShoppingItem} = shoppingCartApi();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    

      const onSubmitHandler = async(data)=>{

        const {fecha_inicio, fecha_final, cant_personas} = data;
        const _fecha_inicio = new Date(fecha_inicio);
        const _fecha_final = new Date(fecha_final);
        const _toDay = new Date();
        const toDay = `${_toDay.getFullYear()}-${_toDay.getMonth()}-${_toDay.getDate()}`
        const precio_total = parseInt(cant_personas) * parseFloat(placeInformation.precio);

        if(_fecha_inicio <= _toDay){
            toast.warn("No se puede guardar está fecha");
            return;
        }

        if(_fecha_final <= _toDay || _fecha_final < _fecha_inicio){
            toast.warn("No se puede guardar está fecha");
            return;
        }
        const item = {
            "id_lugar": placeInformation._id,
            "cant_personas": parseInt(cant_personas),
            "fecha": toDay,
            "fecha_inicio": fecha_inicio,
            "fecha_final": fecha_final,
            "precio_unitario": parseFloat(placeInformation.precio)
        }
        await postShoppingItem(precio_total, item);
        toast.success("Agregado al carrito");
    }
    
      const onInvalid = () => {
        toast.warn("Please check your fields and try again", {
          toastId: "warning"
        });
      };

    let getDate = new Date();
    getDate.setDate(getDate.getDate())

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
                    id="fecha_inicio"
                    name="fecha_inicio"
                    aria-invalid={errors.date ? "true" : "false"}
                    innerRef={{...register("fecha_inicio", { required: true}) }}
                    validation={errors.date}
                    type="date"
                    label={"fecha_inicio"}
                    labelText={"Fecha de entrada"}
                    placeholder={"e.g. 1999-12-31"}
                />
                <FormGroupInput 
                    id="fecha_final"
                    name="fecha_final"
                    aria-invalid={errors.date ? "true" : "false"}
                    innerRef={{...register("fecha_final", { required: true}) }}
                    validation={errors.date}
                    type="date"
                    label={"fecha_final"}
                    labelText={"Fecha de salida"}
                    placeholder={"e.g. 1999-12-31"}
                />
                <FormGroupInput 
                    id={"cant_personas"}
                    name={"cant_personas"}
                    aria-invalid={errors.number ? "true" : "false"}
                    innerRef={{...register("cant_personas", { required: true}) }}
                    validation={errors.number}
                    type={"number"}
                    label={"cant_personas"}
                    labelText={"Num de personas"}
                />
            </fieldset>
            <Button modifierClass={'Button--pink'} type={"submit"}>Reservar ya</Button>
        </Form>
    </div>
    );
}

export default BookingForm;
