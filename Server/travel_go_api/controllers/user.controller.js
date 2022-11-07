const User = require("../models/user.model");
const debug = require("debug")("app:post-controller");

const controller = {};

controller.create = async(req, res) =>{

    try{
        const {nombre, apellido, email, contrasenia_hash, fec_nacimiento, telefono, imagen, rol} = req.body;

        const user = new User({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasenia_hash: contrasenia_hash,
            fec_nacimiento: fec_nacimiento,
            telefono: telefono,
            imagen: imagen,
            rol: rol,

        });

        const newUser = await user.save();
        return res.status(201).json(newUser);
    }
    catch(error){
        debug({error});
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

module.exports = controller;