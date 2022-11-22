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
module.exports = controller;

/*
agregar comentario
  //verificando si el lugar existe antes de agregar o quitar
        if(!place)  return res.status(404).json({error: "Lugar no encontrado"});

        //verificando accion quitar o agregar
        const index = place.comentarios.findIndex(placeId => placeId.equals(identifier));

        if(index >= 0)
            place.comentarios.filter(placeId => !placeId.equals(identifier));
        else
            place.comentarios = [...place.comentarios, identifier];

        //guardando cambios
        return res.status(200).json({message: "Lista de deseo modificada"});
*/