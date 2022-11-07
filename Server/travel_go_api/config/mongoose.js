const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

//conexion a api //mongodb://host:port/name
const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "travelgo";
const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async()=>{
    try{
        await Mongoose.connect(dburi);
        debug("Conexion a la base de datos exitosa");
    }
    catch(error){
        debug("Error en la conexion de la base de datos");
        console.log("error");
        process.exit(1);
    }
}

module.exports = {
    connect
};