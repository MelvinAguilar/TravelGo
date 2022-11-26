const {default:mongoose} = require("mongoose");
const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ubicacionSchema = new Schema({
    departamento:{
        type: String,
        trim: true,
        required: true,
    },
    direccion:{
        type: String,
        trim: true,
        required: true,
    }
})

const redesSchema = new Schema({
    nombre:{
        type:String,
        required: true,
        trim: true        
    },
    url:{
        type:String,
        required: true,
        trim: true,
    }
});

const turisticPlaceSchema = new Schema({
    nombre:{
        type: String,
        trim: true,
        required: true,
        unique: true

    },
    sub_nombre: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    descripcion_especifica:{
        type: String,
        trim: true,
        required: true,

    },
    precio:{
        type: Number,
        trim: true,
        required: true,

    },
    capacidad:{
        type: Number,
        trim: true,
        default: null,

    },
    cant_comentarios:{
        type: Number,
        trim: true,
        default: 0,

    },
    puntuacion_prom:{
        type: Number,
        trim: true,
        default: 0.00,

    },
    comentarios:{
        type: [Schema.Types.ObjectId],
        ref: "Comment",
        default: [],
    },
    etiqueta:{
        type: [String],
        trim: true,

    },
    ubicacion:{
        type: ubicacionSchema,
        required: true,

    },
    redes:{
        type: redesSchema,
        default: null,
    },
    img:{
        type: [String],
        trim: true,
        required :true
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model("TuristicPlace", turisticPlaceSchema)