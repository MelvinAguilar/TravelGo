import classes from "./ItemContainer.module.scss";
import Adventure from "./Adventure/Adventure";
import MoreInformationContainer from "./MoreInformationContainer/MoreInformationContainer";

const ItemContainer =({adventureData, moreInformationData, eventHandler, _key})=>{
    return(
        <div className={classes["item-information-section"]}>
            {<Adventure itemInformation={adventureData}/>
            }
            <h2>Info de tu trip</h2>
            {<MoreInformationContainer itemInformation={moreInformationData}/>
            }
            <button data-delete={_key} onClick={eventHandler}>Eliminar</button>
        </div>
    );
}

export default ItemContainer;