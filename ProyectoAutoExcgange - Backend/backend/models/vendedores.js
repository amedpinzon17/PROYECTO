const {Schema, model} = require('mongoose');

const VendedoreSchema = Schema({


    imagen: {
        type: String,
    },
    
    vendedor: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    
    apellido: {
        type: String,

    },

    estado: {
        type: String,
        required: true,
    },
    googleSingIn:{
        type: Boolean,
        default: false
    },

     rol: {
        type: String,
        required: true,
        default: 'USER',
    },

       password: {
        type: String,
        required: [true, 'el password es requeido'],
    },
    correo_electrónico: {
        type: String,
        required:[ true, "El correo es requerido"],
        unique: true
    },

    fecha_de_nacimiento: {
        type: String,
    },

    dirección: {
        type: String,
    },


    ciudad: {
        type: String,

    },

    número_telefónico: {
        type: String,
        required: true,
        trim: true
    },


    vendedor_verificado: {
        type: String,
        required: [true, "La verificacion es requerida"]
    },


    reputación: {
        type: String,
    },
    

})



module.exports = model ('vendedore',VendedoreSchema);