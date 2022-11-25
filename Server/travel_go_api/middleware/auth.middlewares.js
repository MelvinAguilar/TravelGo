const { verifyToken } = require("../utils/jwt.tools");
const debug = require("debug")("app:auth-middleware"); 
const User = require("../models/user.model");
const ROLS = require("../data/roles.constant.json");

const middlewares = {};

const tokenPrefix = "Bearer";

middlewares.authentication = async(req, res, next)=>{
    try{
        //verificar authorization exista
        const {authorization} = req.headers;

        if(!authorization) return res.status(401).json({error: "No autorizado"});
        
        //verificar que sea un token valido
        const [prefix, token] = authorization.split(" ");
        if(prefix != tokenPrefix) return res.status(401).json({error: "No autorizado"});
        
        if(!token) return res.status(401).json({error: "No autorizado"});
        
        const tokenObject = verifyToken(token);
        if(!tokenObject) return res.status(401).json({error: "No autorizado"});
        
        //obtener usuario
        const {userID} = tokenObject;
        
        const user = await User.findById(userID);
        if(!user) return res.status(401).json({error: "No autorizado"});
        
        //token registrado
        const isTokenValid = user.tokens.includes(token);
        if(!isTokenValid) return res.status(401).json({error: "No autorizado"});

        //modificar la req para tener la informacion del usuario
        req.user = user;
        req.token = token;

        //pasar al siguiente middleware
        next();
    }
    catch(error){
        debug({error})
        return res.status(500).json({
            error: "Error inesperado de servidor"
        })
    }
}

middlewares.authorization = (rolReq = ROLS.SYSADMIN)=>{
    return (req, res, next)=>{
        try{
         //asumiendo que se ha pasado el proceso de autentificación 
        const {roles=[]} = req.user;
        //paso 1 verificamos que el rol sea de roles
        const roleIndex = roles.findIndex(rol=>(rol === rolReq) || rol === ROLS.SYSADMIN);
        
        //filtrando
        if(roleIndex < 0) return res.status(403).json({error: "no tienes permisos"});

        //next middleware

        next();
        }
    catch(error){
        debug(error);
        return res.status(500).json({error: "error inesperado de servidor"});
        }   
    }
}


 module.exports = middlewares;