const {default:mongoose} = require("mongoose");
const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const itemSchema = new Schema({
    id_lugar:{
        type: Schema.Types.ObjectId,
        ref: "TuristicPlace",
        trim: true,
        required: true,

    },
    cant_personas:{
        type: Number,
        required: true,
        trim: true,
        default: 0,

    },
    fecha:{
        type:Date,
        required: true,
        trim: true

    },
    fecha_inicio:{
        type:Date,
        required: true,
        trim: true,

    },
    fecha_final:{
        type: Date,
        required: true,
        trim: true,

    },
    precio_unitario:{
        type: Number,
        trim: true,
        required: true,

    },
    compra:{
        type: Boolean,
        default: false
    }

});

const shoppingCartSchema = new Schema({
    user :{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true,
        trim: true,

    },
    precio_total:{
        type: Number,
        trim: true,
        default: 0.00,        

    },
    item:{
        type: [itemSchema],
        required: true,
        
    }
});

module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);