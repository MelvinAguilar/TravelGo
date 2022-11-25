const {default:mongoose} = require("mongoose");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const itemSchema = new Schema({
    id_lugar:{
        type: mongoose.Types.ObjectId,
        trim: true,
        required: true,

    },
    cant_personas:{
        type: Number,
        required: true,
        trim: true,
        default: 0,

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

    }

});

const bookingSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true, 
        trim: true,

    },
    fecha:{
        type:Date,
        default: Date.now(),
        trim: true

    },
    precio_total:{
        type: Number,
        required: true,
        trim: true,

    },
    item:{
        type: [itemSchema],
        required: true,

    }
});

module.exports = mongoose.model("Booking", bookingSchema);