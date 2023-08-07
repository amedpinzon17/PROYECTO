import mongoose from "mongoose";

const autoSchema = mongoose.Schema({


    marca: {
        type: String,
        required: true,
        trim: true
    },
    
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    
    vendedor: {
        type: String,
        required: true,
        trim: true
    },

    año: {
        type: String,
        required: true,
        trim: true
    },

    precio: {
        type: String,
        required: true,
        trim: true
    },

    imagenes: {
        type: String,
        required: true,
        trim: true
    },

    descripción: {
        type: String,
        required: true,
        trim: true
    },

    estados: {
        type: String,
        required: true,
        trim: true
    },


    estado: {
        type: String,
        required: true,
        trim: true
    },

    historial_mantenimiento: {
        type: String,
        required: true,
        trim: true
    },


    registros_accidentes: {
        type: String,
        required: true,
        trim: true
    },


    kilometraje: {
        type: String,
        required: true,
        trim: true
    },
    

},

{
    timestamps: true,
}


)



const Automoviles = mongoose.model("autos", autoSchema);

export default Automoviles;