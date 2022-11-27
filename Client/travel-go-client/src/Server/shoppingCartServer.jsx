import axios from "axios";
import {toast} from "react-toastify"
import { useConfigContext } from "../contexts/ConfigContext";
import { useEffect, useState } from "react";

const R = 'Bearer';

export const shoppingCartApi = ()=>{

    const {startLoading, stopLoading} = useConfigContext();

    const postShoppingItem = async(precio_total, item, token)=>{
        if(!precio_total || !item || !token){
            toast.error("Error inesperado");
            return;
        }
            
        startLoading();
        try{
            await axios.patch("/shoppingcart", {precio_total, item}, {
                headers:{
                    Authorization: `${R} ${token}`,
                }
            });
        }catch(error){
            const status = error.response.data.error[0].message;
            console.log(status);
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