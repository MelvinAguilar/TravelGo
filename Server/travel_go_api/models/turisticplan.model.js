const {default: mongoose} = require("mongoose");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const turisticPlanSchema = new Schema({
    nombre:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },  
    lugares:{
        type: [mongoose.Types.ObjectId],
        trim: true,
        required: true,
    },
    total_precio:{
        type: Number,
        required: true,
        trim: true,

    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("TuristicPlan", turisticPlanSchema);