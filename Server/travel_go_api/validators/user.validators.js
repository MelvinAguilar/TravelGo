const {body} = require("express-validator");

const validator = {};

const contraseniaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const telefonoRegex = /\D*\(?(\d{3})?\)?\D*(\d{4})\D*(\d{4})/;

validator.registerValidator = [
    body("nombre")
        .notEmpty().withMessage("El nombre no puede ser vacío")
        .isLength({min: 5}).withMessage("Su nombre debe de ser mayor a 5 caracteres"),

    body("email")
        .notEmpty().withMessage("email no debe de ser vacío")
        .isEmail().withMessage("Email debe de ser de tipo string e email"),

    body("contrasenia_hash")
        .notEmpty().withMessage("Contrasenia no debe de ser vacía")
        .matches(contraseniaRegex).withMessage("La contrasenia debe tener mas de 8 caracteres, con 1 letra y 1 numero"),

    body("fec_nacimiento")
        .notEmpty().withMessage("fecha de nacimiento no puede ser vaciá")
        .isDate().withMessage("fec_nacimiento debe de ser fecha"),

    body("telefono")
        .notEmpty().withMessage("telefono no puede ser vacia")
        .matches(telefonoRegex).withMessage("Su numero debe de ser local"),

    body("imagen")
        .optional()
        .isString().withMessage("imagen debe de ser URL"),

    body("rol")
        .optional()
        .isArray().withMessage("rol debe de ser array"),

    body("rol.*")
        .not().isArray().isString().withMessage("array solo de string")
];

module.exports = validator;