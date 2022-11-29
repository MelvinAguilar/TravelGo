import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";
import {useConfigContext} from "./ConfigContext";

const authContext = React.createContext();
const TOKEN_KEY = "tokens_TG";

export const AuthContextProvider = (props)=>{  
    
    //estado para el token
    //estado para los datos del usuario
    const [token, setToken] = useState(null);
    const [user, setUser ] = useState(null);
    const {startLoading, stopLoading} = useConfigContext();
    
    //verificar la validez del token
    useEffect(()=>{
       const _token = getTokensLS();
       if(_token)  
            setToken(_token);
    },[]);

    //efecto para verificar usuario
    useEffect(()=>{
        //obtener datos del usuario
        fetchUserData();
    }, [token]);
    
    const fetchUserData = async()=>{
        //Check if token is null
        if(!token || token === "null") {
            return;
        }

        startLoading();
        try{
            const {data} = await axios.get("/user/profile",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
              });
            
              setUser(data);
        }
        catch(error){
            console.log(error);
            toast.error("Error inesperado", {
                toastId: "error"
            });
            logout(false);

        }
        finally{
            stopLoading();
        }
    }
    
    //funcion para login
    const login = async(email, password)=>{
        startLoading();
        try{
            const {data} = await axios.post("/singin",
                {email, password}
            );   

            const _token = data.token;
            setToken(_token);
            setTokenLS(_token);

            toast.success("Inicio de sesión completado", {
                toastId: "success"
            }); 
        }
        catch(error){
            //loging out
            logout(false);
            const {status} = error.response || {status: 500};
            const msg = {
                "400": "Datos erroneos " + error.message,
                "404": "Email no registrado",
                "401": "Contraseña incorrecta",
                "500": "Something went wrong!",
            }
            toast.error(msg[String(status)], {
                toastId: "error"
            });
        }
        finally{
            stopLoading();
        }
    } 
    
    const singup = async(nombre, email, contrasenia_hash, fec_nacimiento, telefono)=>{
        startLoading();
        try{
            await axios.post("/singup",
            {nombre, email, contrasenia_hash, fec_nacimiento, telefono}
            );
            toast.success("Creación de usuario completado", {
                toastId: "success"
            }); 
            const {data} = await axios.get("/user/id",{
                headers:{
                    email: email,
                    nombre: nombre
                }
            })
            if(!data){
                toast.error("Error al crear usuario");
                return;
            }
            await generalCreateUser(data);
        }
        catch(error){
            const {status} = error.response || {status: 500};
            let data = error.response.data.error || "";
            const newMsg = Array.isArray(data) ? data[0].message : data.message;

            const msg = {
                "400": "Datos erroneos",
                "409": "Usuario o Email ya registrados",
                "500": "Error inesperado"
            }
            toast.error(`${msg[String(status)]} ${newMsg}`, {
                toastId: "error"
            });
        }
        finally{
            stopLoading();
        }
    }

    const generalCreateUser = async(user)=>{
        try{
            await axios.post("/wishlist", {user});
            await axios.post("/shoppingcart", {user});
            console.log("elementos creados correctamente");
        }
        catch(error){
            //console.log(error.status.data.error[0].message);
            toast.error("error inesperado en la creación de elementos");
        }
    }

    const getToken = () => {
        return token;
    }

    const logout = ( showToast = true ) => {
        removeItemLS();
        setTokenLS(null);
        setUser(null);
        if(showToast)
            toast.success("Sesión cerrada", {
                toastId: "success"
            });
    }

    //funcion para singup
    const state = {
        token,
        user,
        login,
        logout,
        singup,
        getToken  
    }
    return <authContext.Provider value={state} {...props}/>
}

export const UseAuthContext = ()=>{
    const context = React.useContext(authContext);
    
    if(!context)
        throw new Error("authContext must be call inside of a authContextProvider component");

    return context;
}
const setTokenLS = (token)=> localStorage.setItem(TOKEN_KEY, token);
const getTokensLS = () => localStorage.getItem(TOKEN_KEY);
const removeItemLS = () => localStorage.removeItem(TOKEN_KEY);

    