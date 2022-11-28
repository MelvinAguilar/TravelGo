import axios from "axios";
import {toast} from "react-toastify"
import { useConfigContext } from "../contexts/ConfigContext";
import { useEffect, useState } from "react";

const R = 'Bearer';

export const shoppingCartApi = ()=>{

    const {startLoading, stopLoading} = useConfigContext();

    const [token, setToken] = useState(null);
    const [shoppingCartData, setShoppingCart] = useState(null);

      //verificar la validez del token
      useEffect(()=>{
        const _token = getTokensLS();
        if(_token)  
             setToken(_token);
     },[]);

    //efecto para verificar usuario
    useEffect(()=>{
        //obtener datos del usuario
        fetchShoppingCart();
    }, [token]);


    const postShoppingItem = async(precio_total, item)=>{
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

    const fetchShoppingCart = async()=>{
        if(!token) return;
        startLoading();
        try{
            const {data} = await axios.get("/own/shoppingcart", {
                headers:{
                    Authorization: `${R} ${token}`
                }
            });
            setShoppingCart(data);
        }
        catch(error){
            const status = error.response.data.error[0].message;
            console.log(status);
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }
    }
    const func ={
        shoppingCartData,
        postShoppingItem
    }
    return func;
}




export const CastPlaceInformation = (Data)=>{
        return {
            id_lugar: Data.id,
            nombre: Data.nombre,
            ubicacion: Data.ubicacion,
            cant_comentarios: Data.cant_comentarios,
            puntuacion_prom: Data.puntuacion_prom,
            precio: setPriceFormat(Data.precio),
            img: Data.img[0],
    }
}
export const totalPerServices = (services)=>{
        let total = 0;
        if(services.length > 0){
            services.map(service=>{
                total += service;
        });
    }
    return total;
}
export const totalPerItem = (cant_personas, pricePerDay, totalPerService)=>{
        return (cant_personas*pricePerDay) + totalPerService;
}
export const DayCounter = (fecha_inicio, fecha_final)=>{
        const noches =  Math.round((fecha_final.getTime()-fecha_inicio.getTime())/(1000*60*60*24));
    return noches;
}
export const setDateFormat = (date)=>{
        return `${date.getFullYear()}/${String(date.getMonth()).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}
export const setPriceFormat = (price)=>{
        return  price.toLocaleString("en",{
            useGrouping: false, 
            minimumFractionDigits: 2
});
}
const getTokensLS = () => localStorage.tokens_TG;
