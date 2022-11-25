
const debug = require("debug")("app:post-controller");
/* store and logical variables */
let allData;

/* importing all controllers */


const controller = {};

const binderData = (DataSchema)=>{
    allData = require(`../models/${DataSchema}.model`);
}


//find all for administrator actions
controller.findAllPlaces = async(req, res) =>{
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

//find all for client views and actions
controller.findAll = async(req, res) =>{
    try{
        const {dataSchema} = req.params;
        binderData(dataSchema);
        const data = await allData
        .find({hidden: false})
        .populate("user", "nombre email");

        return res.status(200).json(data);

    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}


//find item by id
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

//delete document by given id
controller.deleteById = async(req, res)=>{
    try{
        const {dataSchema, identifier} = req.params;
        binderData(dataSchema);
        
        //buscamos por id y si existe borramos
        await allData.findByIdAndRemove({_id: identifier})
        .then(data=>{

            //verificando si existe el dato
            if(data)
                return res.status(200).json(`Deleted`);
            return res.status(404).json({error: "no encontrado"});
        }); 
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//update document by given id
controller.updateById = async(req, res)=>{
    try{
        const {dataSchema, identifier} = req.params;
        binderData(dataSchema);
        
        //buscamos por id y si existe hacemos update con los datos de su body
        await allData.findByIdAndUpdate({_id: identifier}, req.body)
        .then(async()=>{
            await allData.findById(identifier).then(data=>{

                //verify if value existed
                if(data) return res.status(200).json(data);
                return res.status(404).json({error: "no encontrado"});
            })
        }); 
    }
    catch(error){
        debug(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//find user items by user token
controller.findOwn = async (req, res)=>{
    try{
        const {Schema} = req.params;
        binderData(Schema);
        const {_id: userId} = req.user;

        const data = await allData
        .find({user: userId})
        .populate("user", "nombre email");

        return res.status(200).json(data);
    }
    catch(error){
        debug(error);
        return res.status(500).json({error: "Error interno del servidor"});
    }
}
module.exports = controller;