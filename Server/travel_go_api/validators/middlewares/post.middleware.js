const {validationResult} = require("express-validator");

module.exports = (req, res, next)=>{
    //validar los params 
    const errors = validationResult(req);

    //verificamos si existe error
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array().map(error=>({
                field: error.param,
                message: error.msg,
            }))
        })
    }

    //pasamos al siguiente middleware
    next();
}
