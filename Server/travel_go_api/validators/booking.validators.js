const {body} = require("express-validator");

const validator = {};

validator.createBookingValidator =[      

    body("precio_total")
        .notEmpty().withMessage("total no puede ser vacía")
        .bail()
        .isNumeric().withMessage("campo total debe de ser tipo numerico"),
    
    body("item")
        .notEmpty().withMessage("Fecha no puede ser vacía")
        .isArray().withMessage("Item debe de ser array"),

    body("item.*.id_lugar")
        .notEmpty().withMessage("El id_lugar no debe estar vacío")
        .bail()
        .isMongoId().withMessage("El id debe de ser de mongo"),

    body("item.*.cant_personas")
        .notEmpty().withMessage("cant_personas no debe estar vacío")
        .bail()
        .isNumeric().withMessage("cant_personas debe de ser tipo numerico"),
    
    body("item.*.fecha_inicio")
        .notEmpty().withMessage("fecha_inicio no debe estar vacío")
        .bail()
        .isDate().withMessage("fecha_inicio debe de ser tipo fecha"),
    
    body("item.*.fecha_final")
        .notEmpty().withMessage("fecha_final no debe estar vacío")
        .bail()
        .isDate().withMessage("fecha_final debe de ser tipo fecha"),
    
    body("item.*.precio_unitario")
        .notEmpty().withMessage("precio_unitario no debe estar vacío")
        .bail()
        .isNumeric().withMessage("precio_unitario debe de ser tipo numerico")
    
]



module.exports = validator; 