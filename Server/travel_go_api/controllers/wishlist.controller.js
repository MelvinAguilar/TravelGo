const wishlistModel = require("../models/wishlist.model");
const WishList = require("../models/wishlist.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {lugares} = req.body;
        const user = req.user;
        const wishlist = new WishList({
            id_usuario: user._id,
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

module.exports = controller;