import mongoose from "mongoose";

const TransaccioneSchema = mongoose.Schema({


    comprador: {
        type: String,
        required: true,
        trim: true
    },
    
    vendedor: {
        type: String,
        required: true,
        trim: true
    },
    
    estado: {
        type: String,
        required: true,
        trim: true
    },

    marca: {
        type: String,
        required: true,
        trim: true
    },

    fecha_transacción: {
        type: String,
        required: true,
        trim: true
    },

    precio_venta: {
        type: String,
        required: true,
        trim: true
    },

    método_pago: {
        type: String,
        required: true,
        trim: true
    },

    estado_pago: {
        type: String,
        required: true,
        trim: true
    },
    

},

{
    timestamps: true,
}


)



const Transacciones = mongoose.model("transacciones", TransaccioneSchema);

export default Transacciones;