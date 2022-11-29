import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { useConfigContext } from "../contexts/ConfigContext"; 
import React, {useEffect, useState} from "react";  

const R = 'Bearer';

export const commentsAPI = (_id)=>{
    const {startLoading, stopLoading} = useConfigContext();
    const [token, setToken] = useState(getTokensLS || null);
    const navigateTo = useNavigate();
    const [comments, setComments] = useState([]);
    const [place_id, setPlace] = useState(null);
    const [saved, setSaved] = useState([]);

    //token
    useEffect(()=>{
        const _token = getTokensLS();
        if(_token)  
             setToken(_token);
     },[]);

    //verificando validez de id
    useEffect(()=>{
        if(_id)
            setPlace(_id);
    },[]);
    
    useEffect(()=>{
        //obtenemos comentarios
        fetchComments();
        fetchSavedPlace();
    }, [_id]);

    const fetchComments = async()=>{
        if(!place_id)
            return;
        startLoading();
        try{
            const {data} = await axios.get(`/place_comment/${place_id}`);
            setComments(data);
        }
        catch(error){
            toast.error("Error inesperado");
            navigateTo("/");
        }
        finally{
            stopLoading();
        }
    }
       
    const fetchSavedPlace = async()=>{
        if(!_id || !token || token === "null") return;

        try{
            const {data} = await axios.get(`/own/wishlist/place/${_id}`,{
                headers:{
                    Authorization: `${R} ${token}`
                }
            });
            
            setSaved(data);
        }
        catch(error){
            console.log(error);
            toast.error("Error en favoritos");
        }
    }
    return {comments, setComments, fetchComments, saved};
}


export const wishlist = ()=>{
    const {startLoading, stopLoading} = useConfigContext();
    const [token, setToken] = useState(null);
    
        //verificar la validez del token
    useEffect(()=>{
       const _token = getTokensLS();
       if(_token)  
            setToken(_token);
    },[]);

    const patchWishList = async(_id)=>{
        if(!_id)
            return;
        
        startLoading();
        try{
            await axios.patch(`/wishlist/${_id}`,{},{
                headers:{
                    Authorization: `${R} ${token}`
                }
            });
        }
        catch(error){
            console.log(error);
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }
    }
 
    const funcs = {
        patchWishList
    };
    return funcs;
}

export const randomPlace = () => {
    const { startLoading, stopLoading } = useConfigContext();
    const [place, setPlace] = useState(null);
    
    const fetchRandomPlace = async () => {
        startLoading();
        try {
            const { data } = await axios.get("/own/random/place");
            setPlace(data);
        } catch (error) {
            toast.error("Error inesperado");
        } finally {
            stopLoading();
        }
    };
    
    useEffect(() => {
        fetchRandomPlace();
    }, []);
    
    return { place, setPlace, fetchRandomPlace };
}

const getTokensLS = () => localStorage.tokens_TG;

