const {param} = require("express-validator");

const directions = {
    'booking': 'booking',
    'shoppingcart': 'shoppingcart',
    'turisticplace': 'turisticplace',
    'turisticplan': 'turisticplan',
    'user': 'user',
    'wishlist': 'wishlist'
}

const validator = {};
validator.findByIdValidator = [
    param("dataSchema")
        .notEmpty().withMessage("La direccion debe de pertenecer a una coleccion")
        .custom((value)=> value.includes(directions[value])
        ).withMessage("La direccion no pertenece a ninguna coleccion disponible"),

    param("identifier")
        .notEmpty().withMessage("El id no debe de ir vacio")
        .isMongoId().withMessage("El id debe ser de mongo")
];


module.exports = validator; 