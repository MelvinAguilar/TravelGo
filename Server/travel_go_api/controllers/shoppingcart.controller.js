const Shoppingcart = require("../models/shoppingcart.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {precio_total, item} = req.body;
        const {_id: userId} = req.user;
        
        const element = await Shoppingcart.findOne({
            user: userId
        });
        if(element) return res.status(500).json({error: "shopping cart in user already"});

        const shoppingcart = new Shoppingcart({
            user: userId,
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

//toogle for user

controller.patchShoppingCart = async(req, res)=>{
    try{
        const {_id: userId} = req.user;
        const {precio_total, item} = req.body;
        const shoppingcart = await Shoppingcart.findOne({
            user: userId
        });
        shoppingcart.precio_total = precio_total;

        shoppingcart.item = shoppingcart.item.filter(individualItem =>!(individualItem.compra === true));

        shoppingcart.item = [...shoppingcart.item, item];
        
        await shoppingcart.save();

        return res.status(200).json({message: "Lista de compras actualizada"});

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

//find all for client views and actions
controller.findShoppingCartExtraInformation = async(req, res) =>{
    const {_id: userId} = req.user;
    try{
        const data = await WishList.findOne({
            user: userId
        })
        .find({hidden: false})
        .populate("user", "nombre email")
        .populate("id_lugar", "nombre ubicacion img");

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