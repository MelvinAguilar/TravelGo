import classes from "./bookingForm.module.scss";
import Form  from "../../../../Form/Form";
import InputField from "./../../../../Form/InputField/InputField";
import Button from "../../../../Button/Button";
import ErrorMessage from "../../../../Form/ErrorMessage/ErrorMessage";
import {shoppingCartApi} from "../../../../../services/shoppingCartServer";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {StarFill} from "react-bootstrap-icons";

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
    }
    
    const onInvalid = (data) => {
        console.log(data);
        toast.warn("Por favor, revise los campos del formulario", {
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
                {/* <div><StarFill/> {placeInformation.puntuacion_prom} · {placeInformation.cant_comentarios} reseñas</div> */}
            </div>
            <fieldset>
                <label htmlFor="fecha_inicio">Fecha de inicio</label>
                <InputField 
                    id="fecha_inicio"
                    name="fecha_inicio"
                    aria-invalid={errors.fecha_inicio ? "true" : "false"}
                    innerRef={{...register("fecha_inicio", { 
                        required: true
                    })}}
                    validation={errors.fecha_inicio}
                    type="date"
                    placeholder={"e.g. 1999-12-31"}
                >
                    {errors.fecha_inicio?.type === "required" && <ErrorMessage>Este campo es requerido</ErrorMessage>}
                    </InputField>

                <label htmlFor="fecha_final">Fecha final</label>
                <InputField 
                    id="fecha_final"
                    name="fecha_final"
                    aria-invalid={errors.fecha_final ? "true" : "false"}
                    innerRef={{...register("fecha_final", { 
                        required: true
                    })}}
                    validation={errors.fecha_final}
                    type="date"
                    label={"Fecha de salida"}
                    placeholder={"e.g. 1999-12-31"}
                >
                    {errors.fecha_final?.type === "required" && <ErrorMessage>Este campo es requerido</ErrorMessage>}
                </InputField>

                <label htmlFor="cant_personas">Cantidad de personas</label>
                <InputField 
                    id={"cant_personas"}
                    name={"cant_personas"}
                    aria-invalid={errors.cant_personas ? "true" : "false"}
                    innerRef={{...register("cant_personas", { 
                        required: true, 
                        min: 1
                    }) }}
                    validation={errors.cant_personas}
                    type={"number"}
                    label={"Num. de personas"}
                >
                    {errors.cant_personas?.type === "required" && <ErrorMessage>Este campo es requerido</ErrorMessage>}
                    {errors.cant_personas?.type === "min" && <ErrorMessage>La cantidad no puede ser menor a 1</ErrorMessage>}
                </InputField>
            </fieldset>

            <Button modifierClass={'Button--pink'} type={"submit"}>Reservar ahora</Button>
        </Form>
    </div>
    );
}

export default BookingForm;