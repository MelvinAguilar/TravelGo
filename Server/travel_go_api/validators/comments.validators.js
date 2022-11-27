const {body} = require("express-validator");

const validator = {};

validator.createCommentsValidator = [
    body("user")
        .optional()
        .isMongoId().withMessage("El id debe de ser de mongo"),

    body("lugar")
        .optional()
        .isMongoId().withMessage("El campo debe de ser id mongo"),

    body("comentario")
        .notEmpty().withMessage("El campo no puede estar vacío")
        .bail()
        .isString().withMessage("El campo debe de ser string")
        .bail()
        .isLength({max: 250}),
    
    body("puntuacion")
        .notEmpty().withMessage("El campo no puede estar vacío")
        .bail()
        .isNumeric().withMessage("El campo debe de ser numerico"),
    
    body("fecha")
        .optional()
        .isDate().withMessage("El campo debe de ser fecha")

]

module.exports = validator;