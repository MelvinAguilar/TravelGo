const {body} = require("express-validator");

const validator = {};

validator.createWishListValidator =[      
    body("id_usuario")
        .notEmpty().withMessage("El id_usuario no debe estar vacío")
        .bail()
        .isMongoId().withMessage("El id debe de ser tipo id"),

    body("lugares")
        .notEmpty().withMessage("El lugares no debe estar vacío")
        .bail()
        .isArray().isMongoId().withMessage("lugares debe de ser array de id"),


]



module.exports = validator; 