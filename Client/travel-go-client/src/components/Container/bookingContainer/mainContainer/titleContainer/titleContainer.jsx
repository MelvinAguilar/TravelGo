import classes from "./titleContainer.module.scss";
import { BoxArrowInRight } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";
import {useState, useEffect} from "react";
import {wishlist, commentsAPI} from "../../../../../services/placeServer";

const titleContainer = ({title, _id})=>{
    const location = useLocation();
    const {patchWishList} = wishlist();
    const {saved} = commentsAPI(_id);
    const [placeSaved, setSaved] = useState(false);

    useEffect(()=>{
        setSaved(saved.saved)
    },[saved.saved])

    const onClickHandler = ()=>{
        
        if(placeSaved) setSaved(false);
        else setSaved(true);

        patchWishList(_id);
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
                <div onClick={onClickHandler} className={classes[`save-${placeSaved}`]}>
                    <Heart/>
                    Guardar
                </div>
            </div>
        </div>
    );
}

export default titleContainer;