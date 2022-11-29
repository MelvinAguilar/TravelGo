import classes from "./MoreInformationContainer.module.scss";
import Container from "../../../Container";
import InputField from "../../../../Form/InputField/InputField";

const MoreInformationContainer = ({itemInformation})=>{
    
    return (
        <div className={classes["more-information"]}>
            <div className={classes.information}>
                <div>
                    <p>{`$${itemInformation.precio_unitario} USD x ${itemInformation.noches} noches`}</p>
                    <p>{`$${itemInformation.sub_precio_noches}`}</p>
                </div>
                <div>
                    <p>Servicios extra</p>
                    <p>{`$${itemInformation.sub_servicios_extra}`}</p>
                </div>
                <div>
                    <p>Tarifa de impuestos</p>
                    <p>{`$${itemInformation.impuestos} USD`}</p>
                </div>
                <hr/>
                <div>
                    <p>
                        Total sin incluir IVA
                    </p>
                    <p>
                        {`$${itemInformation.subtotal_item}USD`}
                    </p>
                </div>
            </div>

            <div className={classes.information}>
            <label htmlFor="fecha_inicio">Día de llegada</label>
                <InputField
                    className={classes["input-information"]}
                    value = {itemInformation.fecha_inicio}
                    name="fecha_inicio"
                    disabled
                />
            <label htmlFor="fecha_final">Día de salida</label>
                <InputField
                    className={classes["input-information"]}
                    value = {itemInformation.fecha_final}
                    name="fecha_final"
                    disabled
                />
            <label htmlFor="N_personas">Num. de personas</label>
                <InputField
                    className={classes["input-information"]}
                    value = {itemInformation.cant_personas}
                    name="N_personas"
                    disabled
                />
            </div>
        </div>
    );
    }

export default MoreInformationContainer;