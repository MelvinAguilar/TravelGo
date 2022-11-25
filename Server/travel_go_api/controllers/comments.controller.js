const Comment = require("../models/comments.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res)=>{
    try{
        const {_id: UserId} = req.user;
        const {lugar, comentario, puntuacion} = req.body;

        const comment = new Comment({
            user: UserId,
            lugar: lugar,
            comentario: comentario,
            puntuacion: puntuacion
        });

        const newComment = await comment.save();

        return res.status(201).json(newComment);
        
    }
    catch(error){
        debug(error);
        return res.status(500).json({error: "Error inesperado del servidor"});
    }
}

controller.findByPlace = async(req, res)=>{
    try{
        const {place} = req.params;
        const data = await Comment
            .find({lugar: place})
            .populate("user", "nombre");

        return res.status(201).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({error: "Error inesperado del servidor"});
    }
}

module.exports = controller;