const {body} = require("express-validator");

const validator = {};

validator.createWishListValidator =[      
    body("id_usuario")
        .optional()
        .isMongoId().withMessage("El id debe de ser tipo id"),

    body("lugares")
        .optional()
        .isArray().isMongoId().withMessage("lugares debe de ser array de id"),


]



module.exports = validator; 