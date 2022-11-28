import classes from "./titleContainer.module.scss";
import { BoxArrowInRight } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";
import {useState} from "react";
import {wishlist} from "../../../../../services/placeServer";

const titleContainer = ({title, _id})=>{

    const location = useLocation();
    const [saved, setSave] = useState(false);
    const {patchWishList} = wishlist();
    
    const onClickHandler = ()=>{
        const token = localStorage.tokens_TG;
        if(!saved) setSave(true);
        else setSave(false);

        if(!_id) return;
        if(!token) return;

        patchWishList(_id, token);
    }


    return(
        <div className={classes["title-section"]}>
            <div>
                <h1>{title}</h1>
                <h2>El Salvador, un lugar escondido en Centroamérica</h2>
            </div>
            <div>
                <RWebShare
                    data={{
                        text: title,
                        url: location.pathname,
                        title: "Travel Go"
                    }}
                >
                    <button className={classes["share-button"]}>
                        <BoxArrowInRight/>
                        Compartir
                    </button>
                </RWebShare>
                <div onClick={onClickHandler} className={classes[`save-${saved}`]}>
                    <Heart/>
                    Guardar
                </div>
            </div>
        </div>
    );
}

export default titleContainer;