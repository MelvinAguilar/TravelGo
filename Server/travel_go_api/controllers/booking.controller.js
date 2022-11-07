const Booking = require("../models/booking.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {id_usuario, fecha, precio_total, item} = req.body;

        const booking = new Booking({
            id_usuario: id_usuario,
            fecha: fecha,
            precio_total: precio_total,
            item: item,

        });

        const newBooking = await booking.save();
        return res.status(201).json(newBooking);
    }
    catch(error){
        debug({error});
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

module.exports = controller;