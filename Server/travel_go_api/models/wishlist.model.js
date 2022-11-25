const {default:mongoose} = require("mongoose");
const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const wishListSchema = new Schema({
    
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true,

    },
    lugares:{
        type: [mongoose.Types.ObjectId],
        ref: "TuristicPlace",
        default: []

    }
});

module.exports = mongoose.model("WishList", wishListSchema);