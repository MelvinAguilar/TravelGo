const jwt = require("jsonwebtoken");
const debug = require("debug")("app:jwt");

//entorno variables
const secret = process.env.TOKEN_SECRET || "SuperSecret";
const expTime = process.env.TOKEN_EXP || "10d";

const tools = {};

tools.createToken = (_id)=>{
    return jwt.sign({userID: _id}, secret, {expiresIn: expTime})
}

tools.verifyToken = (token)=>{
    try{
        debug(jwt.verify (token, secret));
        return jwt.verify(token, secret);
    }
    catch(error){
        return false;
    }
}

module.exports = tools;