const {body} = require("express-validator");

const validator = {};

validator.createTuristicPlaceValidator =[      
    body("nombre")
        .notEmpty().withMessage("El nombre no debe estar vacío")
        .bail()
        .isString().withMessage("El nombre debe de ser string"),

    body("descripcion_general")
        .notEmpty().withMessage("descripcion_general no puede ser vacía")
        .bail()
        .isString().withMessage("descripcion_general debe de ser string")
        .bail()
        .isLength({max: 250}),

    body("descripcion_especifica")
        .notEmpty().withMessage("descripcion_especifica no puede ser vacía")
        .bail()
        .isString().withMessage("descripcion_especifica debe de ser string"),

    body("precio")
        .notEmpty().withMessage("precio no puede ser vacía")
        .bail()
        .isNumeric().withMessage("precio debe de ser numerico"),

    body("capacidad")
        .optional()
        .isNumeric().withMessage("capacidad debe de ser numerico"),

    body("cant_comentarios")
        .optional()
        .isNumeric().withMessage("cant_comentarios debe de ser numerico"),

    body("puntuacion_prom")
        .optional()
        .isNumeric().withMessage("puntuacion_prom debe de ser numerico"),

    body("etiqueta")
        .isArray().withMessage("etiqueta debe de ser array"),

    body("etiqueta.*")
        .not().isArray().isString().withMessage("etiqueta debe de ser array string"),

    body("ubicacion")
        .notEmpty().withMessage("ubicacion no puede ser vacía"),

    body("ubicacion.departamento")
        .notEmpty().withMessage("departamento no puede ser vacía")
        .bail()
        .isString().withMessage("departamento debe de ser string"),

    body("ubicacion.direccion")
        .notEmpty().withMessage("direccion no puede ser vacía")
        .bail()
        .isString().withMessage("direccion debe de ser string"),

    body("redes.nombre")
        .notEmpty().withMessage("redes.nombre no puede ser vacía")
        .bail()
        .isString().withMessage("redes.nombre debe de ser string"),

    body("redes.url")
        .notEmpty().withMessage("redes.url no puede ser vacía")
        .bail()
        .isURL().withMessage("redes.url debe de ser url"),

    body("servicios")
        .optional()
        .isArray().withMessage("servicios debe de ser array"),

    body("servicios.*")
        .not().isArray().isString().withMessage("servicios debe de ser array de string"),
    
]



module.exports = validator; 