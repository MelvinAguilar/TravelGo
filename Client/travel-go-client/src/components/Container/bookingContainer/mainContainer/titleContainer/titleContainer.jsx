import classes from "./titleContainer.module.scss";
import {BoxArrowInRight} from "react-bootstrap-icons";
import {Heart} from "react-bootstrap-icons";

const titleContainer = ()=>{
    return(
        <section className={classes["title-section"]}>
            <div>
                <h1>Cascada La Olomina · Arambala, Morazán</h1>
                <h2>El Salvador, un lugar escondido en Centroamérica</h2>
            </div>
            <div>
                <div>
                    <BoxArrowInRight/>
                    Share
                </div>
                <div>
                    <Heart/>
                    Save
                </div>
            </div>
        </section>
    );
}

export default titleContainer;