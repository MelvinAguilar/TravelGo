const {default: mongoose} = require("mongoose");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const debug = require("debug")("app:user-model");

const crypto = require("crypto");

const UserSchema = new Schema({
    nombre:{
        type: String,
        trim: true,
        required: true,
        unique: true

    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true

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
        unique: true
        
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

    salt:{
        type: String,
    }

},     
{
    timestamps: true
});

UserSchema. methods = {
    encryptedPassword: function(password){
        if(!password) return "";

        try{
            const encryptedPassword = crypto.pbkdf2Sync(
                password,
                this.salt,
                1000, 64,
                'sha512'
            ).toString("hex");
            return encryptedPassword;
        }
        catch(error){
            debug({error});
            return "";
        }
    },

    makeSalt: function(){
        return crypto.randomBytes(16).toString("hex");
    },

    comparePassword: function(password){
        return this.contrasenia_hash === this.encryptedPassword(password);
    }
}

UserSchema.virtual("password")
    .set(function (password){
        if(!password) return;
        this.salt = this.makeSalt();
        this.contrasenia_hash = this.encryptedPassword(password);

    })
module.exports = mongoose.model("User", UserSchema);