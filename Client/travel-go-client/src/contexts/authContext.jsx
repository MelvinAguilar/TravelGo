import axios from "axios";
import React, { useEffect, useState } from "react";
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
       if(!_token)  
            setToken(_token);
    },[]);

    //efecto para verificar usuario
    useEffect(()=>{
        //obtener datos del usuario
        fetchUserData();
    }, [token]);
    
    const fetchUserData = async()=>{
        if(!token)
            return;
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
            toast.error("Error inesperado");
            logout();

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

            toast.success("Inicio de sesión completado"); 
        }
        catch(error){
            //loging out
            logout();
            const {status} = error.response || {status: 500};
            const msg = {
                "400": "Datos erroneos",
                "404": "Email no registrado",
                "401": "Contraseña incorrecta",
                "500": "Something went wrong!",
            }
            toast.error(msg[String(status)]);
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
            toast.success("Creación de usuario completado"); 
        }
        catch(error){
            const {status} = error.response || {status: 500};
            msg = {
                "400": "Datos erroneos",
                "409": "Usuario e Email ya registrados",
                "500": "Error inesperado"
            }
            toast.error(msg[String(status)]);
        }
        finally{
            stopLoading();
        }
    }

    const logout = ()=>{
        removeItemLS();
        setTokenLS(null);
        setUser(null);  
    }

    //funcion para singup
    const state = {
        token,
        user,
        login,
        logout,
        singup    
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

    