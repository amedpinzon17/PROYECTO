import mongoose from "mongoose";

const VendedoreSchema = mongoose.Schema({


    imagen: {
        type: String,
        required: true,
        trim: true
    },
    
    vendedor: {
        type: String,
        required: true,
        trim: true
    },
    
    apellido: {
        type: String,
        required: true,
        trim: true
    },

    estado: {
        type: String,
        required: true,
        trim: true
    },

    correo_electrónico: {
        type: String,
        required: true,
        trim: true
    },

    fecha_de_nacimiento: {
        type: String,
        required: true,
        trim: true
    },

    dirección: {
        type: String,
        required: true,
        trim: true
    },


    ciudad: {
        type: String,
        required: true,
        trim: true
    },

    número_telefónico: {
        type: String,
        required: true,
        trim: true
    },


    vendedor_verificado: {
        type: String,
        required: true,
        trim: true
    },


    reputación: {
        type: String,
        required: true,
        trim: true
    },
    

},

{
    timestamps: true,
}


)



const vender = mongoose.model("vendedores", VendedoreSchema);

export default vender;