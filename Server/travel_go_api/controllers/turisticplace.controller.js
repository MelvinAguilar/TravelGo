const TuristicPlace = require("../models/turisticplace.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{

    try{

        const {nombre, sub_nombre, descripcion_especifica, precio, capacidad, cant_comentarios, puntuacion_prom, comentarios, etiqueta, ubicacion, redes, img} = req.body;

        const turisticPlace = new TuristicPlace({
            nombre: nombre,
            sub_nombre: sub_nombre,
            descripcion_especifica: descripcion_especifica,
            precio: precio,
            capacidad: capacidad,
            cant_comentarios: cant_comentarios,
            puntuacion_prom: puntuacion_prom,
            comentarios: comentarios,
            etiqueta: etiqueta,
            ubicacion: ubicacion,
            redes: redes,
            img: img,

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
//find place by etiqueta
controller.findByTag = async(req, res)=>{
    try{
        const {tag} = req.params;
        const data = await TuristicPlace
        .find({etiqueta: tag, hidden: false});

        return res.status(200).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({error: "Error interno del servidor"});
    }
}


//find place by name
controller.findByName = async(req, res)=>{
    try{
        const {name} = req.params;
        const data = await TuristicPlace.find({
            nombre: name
        });

        return res.status(200).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error interno del servidor"
        });
    }
}
module.exports = controller;