const {default: mongoose} = require("mongoose");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    nombre:{
        type: String,
        trim: true,
        required: true,

    },
    email:{
        type: String,
        trim: true,
        required: true,

    },
    contrasenia_hash:{
        type: String,
        trim: true,
        required: true,

    },
    fec_nacimiento:{
        type: Date,
        trim: true,
        required: true,

    },
    telefono:{
        type: String,
        trim: true,
        required: true,

    },
    imagen:{
        type: String,
        trim: true,
        default: 'img/img_user/usuario.png',       

    },
    rol:{
        type: String,
        trim: true,
        default: 'usuario',
    },

},     
{
    timestamps: true
});


module.exports = mongoose.model("User", UserSchema);