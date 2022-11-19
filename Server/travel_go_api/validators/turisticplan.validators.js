const {body} = require("express-validator");

const validator = {};

validator.createPlanValidator =[      
    body("nombre")
        .notEmpty().withMessage("El nombre no debe estar vacío")
        .bail()
        .isString().withMessage("El nombre debe de ser string"),

    body("lugares")
        .notEmpty().withMessage("lugares no puede ser vacía")
        .bail()
        .isArray({min: 2}).withMessage("lugares debe tener más de un id"),
        
    body("lugares.*")
        .not().isArray().isMongoId().withMessage("lugares debe ser array de id"),

    body("total_precio")
        .notEmpty().withMessage("total no puede ser vacía")
        .bail()
        .isNumeric().withMessage("campo total debe de ser tipo numerico"),
    
    
]



module.exports = validator; 