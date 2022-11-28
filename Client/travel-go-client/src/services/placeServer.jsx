import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { useConfigContext } from "../contexts/ConfigContext"; 
import React, {useEffect, useState} from "react";   

const R = 'Bearer';

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

    return {comments, setComments, fetchComments};
}


export const wishlist = ()=>{
    const {startLoading, stopLoading} = useConfigContext();
    const patchWishList = async(_id, token)=>{
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
            //const {status} = error.response;
            //console.log(status.data.error[0].message);
            toast.error("Error inesperado");
        }
        finally{
            stopLoading();
        }
    }
    
    const funcs = {
        patchWishList,
    };
    return funcs;
}