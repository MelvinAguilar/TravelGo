import axios from "axios";
import {toast} from "react-toastify"
import { useConfigContext } from "../contexts/ConfigContext";
import { useEffect, useState } from "react";

const R = 'Bearer';

export const shoppingCartApi = ()=>{

    const {startLoading, stopLoading} = useConfigContext();

    const postShoppingItem = async(precio_total, item)=>{
        startLoading();
        try{
            await axios.patch("/shoppingcart", {precio_total, item});
        }catch(error){
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }

    }
    const func ={
        postShoppingItem
    }
    return func;
}