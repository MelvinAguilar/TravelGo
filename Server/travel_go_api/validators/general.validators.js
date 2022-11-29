const {param} = require("express-validator");
const debug = require("debug")("app: validator");

const directions = {
    'booking': 'booking',
    'shoppingcart': 'shoppingcart',
    'turisticplace': 'turisticplace',
    'turisticplan': 'turisticplan',
    'user': 'user',
    'wishlist': 'wishlist',
    'comments': 'comments'
}

const validator = {};
validator.findByIdValidator = [
    param("dataSchema")
        .optional()
        .custom(value=>{
            if(value===directions[value]) return true;
            return false;
        }).withMessage(`La direccion no pertenece a ninguna coleccion disponible`),

    param("identifier")
        .optional()
        .isMongoId().withMessage("El id debe ser de mongo")
];


module.exports = validator; 