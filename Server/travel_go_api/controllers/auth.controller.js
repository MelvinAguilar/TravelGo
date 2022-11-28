const User = require("../models/user.model");
const debug = require("debug")("app:register-controller");
const ROLS = require("../data/roles.constant.json");

const {createToken, verifyToken} = require("../utils/jwt.tools");
const { findOne } = require("./turisticplace.controller");

const controller = {};

controller.register = async(req, res)=>{
    try{
        //obtenemos datos del req->|body
        const {
            nombre, email, contrasenia_hash, fec_nacimiento, telefono, imagen
        } = req.body;

        //verificamos que el username o email no estén ocupados
        const user = await User.findOne({
            $or:[{nombre: nombre},{email:email}]
        });

        if(user){
            return res.status(409).json({
                error: "Este usuario e email ya están registrados"
            })
        }

        //encripatamos contraseña
        const newUser = new User({
            nombre: nombre,
            email: email,
            password: contrasenia_hash,
            fec_nacimiento: fec_nacimiento,
            telefono: telefono,
            imagen: imagen,
            roles: [ROLS.USER]
        });
        //creamos usuario

        await newUser.save();
        return res.status(201).json({
            message: "Usuario creado con éxito"
        });

    }
    catch(error){
        debug({error});
        return res.status(500).json({
            message: "Error inesperado"
        });
    }

}

controller.singin = async(req, res)=>{
    try{
        const {email, password} = req.body;

        //verificando existencia de usuario 
        const user = await User.findOne({email: email})
        if(!user) return res.status(404).json({ error: "El usuario no existe"});
        //comparando contraseñas 
        if(!user.comparePassword(password))
            return res.status(401).json({error: "Contraseña incorrecta"});

        //permitir loggeo
        //creacion de token
        const token = createToken(user._id);

        //verificando tokens activos y eliminando viejos, dejando 4 sesiones activas only
        user.tokens = [token, ...user.tokens.filter(_token => verifyToken(_token)).splice(0,3)];

        //almacenamiento de token
        await user.save();

        return res.status(200).json({token: token});


    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error inesperado"
        });
    }
}

controller.findRoleByToken = async(req, res)=>{
    try{
        const {_id} = req.user;
        const user = await User.findById(_id);
        return res.status(200).json(user.roles);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error inesperado"
        });
    }
}

controller.findUserByToken = async(req, res)=>{
    try{
        const {_id, nombre, email, fec_nacimiento, telefono, roles, imagen} = req.user;
        return res.status(200).json({
            _id, nombre, email, fec_nacimiento, telefono, roles, imagen
        });
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error inesperado"
        });
    }
}

controller.findUserByNameAndEmail = async(req, res)=>{
    try{
        const {nombre, email} = req.headers;
        const data = await User.findOne({
            $and:[{nombre: nombre}, {email: email}]
        })
        return res.status(200).json(data._id);
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error inesperado"
        });
    }
}

module.exports = controller;