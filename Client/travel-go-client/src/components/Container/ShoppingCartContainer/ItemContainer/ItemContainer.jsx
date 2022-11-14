import classes from "./ItemContainer.module.scss";
import Adventure from "./Adventure/Adventure";
import MoreInformationContainer from "./MoreInformationContainer/MoreInformationContainer";

const ItemContainer =({adventureData, moreInformationData, eventHandler, _key})=>{
    return(
        <section className={classes["item-information-section"]}>
            {<Adventure itemInformation={adventureData}/>
            }
            <h2>Info de tu trip</h2>
            {<MoreInformationContainer itemInformation={moreInformationData}/>
            }
            <h2 data-delete={_key} onClick={eventHandler}>ELIMINAR</h2>
        </section>
    );
}

export default ItemContainer;