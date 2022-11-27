import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { useConfigContext } from "../contexts/ConfigContext"; 
import React, {useEffect, useState} from "react";   

export const commentsAPI = (_id)=>{
    const {startLoading, stopLoading} = useConfigContext();
    const navigateTo = useNavigate();
    const [comments, setComments] = useState([]);
    const [place_id, setPlace] = useState(null);

    //verificando validez de id
    useEffect(()=>{
        if(_id)
            setPlace(_id);
    },[]);
    
    useEffect(()=>{
        //obtenemos comentarios
        fetchComments();
    }, [place_id]);

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

    const functions = {
        comments
    }
    return functions;
}

export const placeAPI = (_id)=>{
    const {startLoading, stopLoading} = useConfigContext();
    const [place, setPlaceInformation] = useState({});
    const [place_id, setPlace] = useState(null);

    useEffect(()=>{
        if(_id)
            setPlace(_id);
    },[]);

    useEffect(()=>{
        if(place_id)
            fetchPlace();
    }, [place_id])

/*     const fetchPlace = async()=>{
        if(!place_id)
            return;
        startLoading();
        try{
            const {data} = await axios.get(`/specific/turisticplace/${place_id}`);
            setPlaceInformation(data);
        }
        catch(error){
            toast.error("Error inesperado");
            navigateTo("/")
        }
        finally{
            stopLoading();
        }
    }
    const functions ={
        place
    } */

    return functions;
}