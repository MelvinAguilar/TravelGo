const WishList = require("../models/wishlist.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {lugares} = req.body;
        const {_id: userId} = req.user;
        const wishlist = new WishList({
            user: userId,
            lugares: lugares
        });

        const newWishList = await wishlist.save();

        return res.status(201).json(newWishList);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

controller.toogleWishList = async(req, res)=>{
    try{
        const {_id: userId} = req.user;
        const {identifier} = req.params;
        
        const wishlist = await WishList.findOne({
            user: userId
        });

        const index = wishlist.lugares.findIndex(lugarId => lugarId.equals(identifier));
        //verificando accion agregar quitar
        if(index >= 0)
            wishlist.lugares = wishlist.lugares.filter(lugarId => !lugarId.equals(identifier));
        else
            wishlist.lugares = [...wishlist.lugares, identifier];
        
        //guardando cambios
        await wishlist.save();
        return res.status(200).json({message: "Lista de deseos actualizada"});
    }
    catch(error){
        debug(error);
        return res.status(500).json({error: "Error inesperado en el servidor"});
    }
}

//find all for client views and actions
controller.findWishListExtraInformation = async(req, res) =>{
    const {_id: userId} = req.user;
    if(!userId) return(404).json({error: "user not found"})
    try{
        const data = await WishList.findOne({
            user: userId
        })
        .find({hidden: false})
        .populate("user", "nombre email")
        .populate("lugares", "nombre ubicacion img");

        return res.status(200).json(data);

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

module.exports = controller;
