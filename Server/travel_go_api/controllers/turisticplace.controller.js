const TuristicPlace = require("../models/turisticplace.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{

    try{

        const {nombre, descripcion_general, descripcion_especifica, precio, capacidad, cant_comentarios, puntuacion_prom, etiqueta, ubicacion, redes, servicios} = req.body;

        const turisticPlace = new TuristicPlace({
            nombre: nombre,
            descripcion_general: descripcion_general,
            descripcion_especifica: descripcion_especifica,
            precio: precio,
            capacidad: capacidad,
            cant_comentarios: cant_comentarios,
            puntuacion_prom: puntuacion_prom,
            etiqueta: etiqueta,
            ubicacion: ubicacion,
            redes: redes,
            servicios: servicios,

        });

            const newTuristicPlace = await turisticPlace.save();
            return res.status(201).json(newTuristicPlace);
    }
    catch(error){
        debug({error});
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
};

module.exports = controller;