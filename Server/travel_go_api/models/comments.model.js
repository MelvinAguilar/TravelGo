const Mongoose = require("mongoose");
const {default: mongoose} = require("mongoose");
const Schema = Mongoose.Schema;

const item = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true,
    },
    comentario:{
        type: String,
        required: true,
        trim: true,
    },
    puntuacion:{
        type: Number,
        required: true,
        trim: true,
    },
    fecha:{
        type: Date,
        default: Date.now()
    }
});

const commentSchema = new Schema({

    lugar: {
        type: Schema.Types.ObjectId,
        ref: "TuristicPlace",
        required: true,
        trim: true,

    },
    item:{
        type: [item],
        required: true, 
    }
    
});

module.exports = mongoose.model("Comment", commentSchema);