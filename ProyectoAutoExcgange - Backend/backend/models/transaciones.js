const {Schema, model} = require('mongoose');

const TransaccioneSchema = Schema({


    comprador: {
        type: String,
        required: [true, "El comprador es requereido"]

    },
    
    vendedor: {
        type: String,
        required: [true, "El vendedor es requerido"]

    },
    
    estado: {
        type: String,

    },

    marca: {
        type: String,

    },

    fecha_transacción: {
        type: String,

    },

    precio_venta: {
        type: String,

    },

    método_pago: {
        type: String,


    },

    estado_pago: {
        type: Boolean,
        default: false,
        required: [true, "El estado de pago es requqerido"]
    },
    

})



module.exports = model('transacciones', TransaccioneSchema);