const {default:mongoose} = require("mongoose");
const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const wishListSchema = new Schema({
    
    id_usuario:{
        type: mongoose.Types.ObjectId,
        required: true,
        trim: true,

    },
    lugares:{
        type: [mongoose.Types.ObjectId],
        required: true,
        trim: true,

    }
});

module.exports = mongoose.model("WishList", wishListSchema);