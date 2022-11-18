const User = require("../models/user.model");
const debug = require("debug")("app:register-controller");

const controller = {};

controller.register = async(req, res)=>{
    try{
        //obtenemos datos del req->|body
        const {
            nombre, email, contrasenia_hash, fec_nacimiento, telefono, imagen, rol
        } = req.body;

        //verificamos que el username o email no estén ocupados
        const user = await User.findOne({
            $or:[{nombre: nombre},{email:email}]
        });

        if(user){
            return res.status(409).json({
                error: "Este usuario e email ya están siendo usados"
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
            rol: rol
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
        
        return res.status(200).json({message: "El usuario se ha loggeado"});


        //permitir loggeo

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error inesperado"
        });
    }
}

module.exports = controller;