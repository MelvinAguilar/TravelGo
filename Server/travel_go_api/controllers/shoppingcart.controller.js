const Shoppingcart = require("../models/shoppingcart.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {id_usuario, precio_total, item} = req.body;

        const shoppingcart = new Shoppingcart({
            id_usuario: id_usuario,
            precio_total: precio_total,
            item: item
        });
        
        const newShoppingCart = await shoppingcart.save();
        return res.status(201).json(newShoppingCart);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

module.exports = controller;