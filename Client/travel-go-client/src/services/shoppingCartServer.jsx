import axios from "axios";
import {toast} from "react-toastify"
import { useConfigContext } from "../contexts/ConfigContext";
import { useEffect, useState } from "react";
import { UseAuthContext } from "../contexts/authContext";

const R = 'Bearer';

export const shoppingCartApi = ()=>{
    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = UseAuthContext();
    
    const [shoppingCartData, setShoppingCart] = useState(null);

    //efecto para verificar usuario
    useEffect(()=>{
        //obtener datos del usuario
        fetchShoppingCart();
    }, [token]);


    const saveInBooking = async(fecha, precio_total, item)=>{
        if(!fecha || !precio_total || !item) return;
        startLoading();
        try{
            await axios.post("/booking",{
                fecha, precio_total, item
            }, {
                headers:{
                    Authorization: `${R} ${token}`
                }
            });
            toast.success("Gracias por su compra");

        }
        catch(error){
            console.log(error.response.data.error);
            toast.error("Lo sentimos, no se ha podido guardar el registro");
        }
        finally{
            stopLoading();
        }
    }

    const toogleBoughtItems = async(_id)=>{
        if(!_id) return;
        startLoading();
        try{
            console.log(_id);
            await axios.patch("/shoppingcart/bought",{
                _id
            }, {
                headers:{
                    Authorization: `${R} ${token}`
                }
            });
            toast.success("Gracias por su compra");

        }
        catch(error){
            toast.error("Lo sentimos, no se ha podido guardar el registro");
        }
        finally{
            stopLoading();
        }
    }

    const postShoppingItem = async(precio_total, item)=>{
        if(!precio_total || !item || !token){
            toast.error("Error inesperado!");
            return;
        }
            
        startLoading();
        try{
            const id = user._id;
            await axios.patch("/shoppingcart", {id, precio_total, item}, {
                headers:{
                    Authorization: `${R} ${token}`,
                }
            });
            toast.success("Item agregado al carrito de compras!", {
                toastId: "success"
            });
        }catch(error){
            console.log(error);
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
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }
    }

    const removeShoppingCartItem = async(_id)=>{
        if(!_id) return;
        startLoading();
        try{
            await axios.patch("/own/remove/shoppingcart",
            {_id},{
                headers:{
                    Authorization: `${R} ${token}`
                }
            })
            fetchShoppingCart();
        }
        catch(error){
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }
    }
    const func ={
        shoppingCartData,
        postShoppingItem,
        removeShoppingCartItem,
        saveInBooking,
        toogleBoughtItems
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
export const totalPerItem = (cant_personas, pricePerDay, totalPerService=0)=>{
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
