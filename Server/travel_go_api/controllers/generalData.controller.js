const debug = require("debug")("app:post-controller");
/* store and logical variables */
let allData;

/* importing all controllers */


const controller = {};

const binderData = (DataSchema)=>{
    allData = require(`../models/${DataSchema}.model`);
}


controller.findAll = async(req, res, next) =>{
    try{
        const {dataSchema} = req.params;
        binderData(dataSchema);
        const data = await allData.find({
            hidden: false
        });

        return res.status(200).json(data);

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

controller.findOneById = async(req, res) =>{
    try{
        const {dataSchema, identifier} = req.params;
        binderData(dataSchema);
        const data = await allData.findById(identifier);
        if(!data){
            return res.status(404).json({
                error: `Verificar la petición, error producido en ${dataSchema} y ${identifier}`
            });
        }
        return res.status(200).json(data);

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

module.exports = controller;