const TuristicPlan = require("../models/turisticplan.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {nombre, lugares, total_precio} = req.body;

        const turisticplan = new TuristicPlan({
            nombre: nombre,
            lugares: lugares,
            total_precio: total_precio
        });

        const newTuristicPlan = await turisticplan.save();
        return res.status(201).json(newTuristicPlan);

    }
    catch(error){
        debug("error en el servidor");
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

module.exports = controller;