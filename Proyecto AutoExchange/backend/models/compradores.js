import mongoose from "mongoose";

const compradoresSchema = mongoose.Schema({


    comprador: {
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

    password: {
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

    

},

{
    timestamps: true,
}


)



const Comprar = mongoose.model("compradores", compradoresSchema);

export default Comprar;
