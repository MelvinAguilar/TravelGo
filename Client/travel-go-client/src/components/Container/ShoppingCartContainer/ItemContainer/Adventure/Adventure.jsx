import classes from "./Adventure.module.scss";
import {StarFill} from "react-bootstrap-icons";


const Adventure =({itemInformation})=>{
    return (
        <div className={classes["adventure-container"]}>
            <figure>
               {<img src={itemInformation.image}/>
               }
            </figure>
            <div className={classes["information"]}>
                <h1>
                    {`${itemInformation.nombre.toUpperCase()} TRIP` }
                </h1>
                <h2>
                    {`${itemInformation.ubicacion.direccion.toUpperCase()}, ${itemInformation.ubicacion.departamento.toUpperCase()}`
                    }
                </h2>
                <div>
                    <h3>
                        {`$${itemInformation.precio}`}
                    </h3>
                    <h4>
                        USD
                    </h4>
                    <p>
                        noche
                    </p>
                </div>
                <div>
                    <StarFill/>
                    <p>
                        {`${itemInformation.puntuacion_prom} · (${itemInformation.cant_comentarios})`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Adventure;