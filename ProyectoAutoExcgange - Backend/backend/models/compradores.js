const {Schema, model} = require('mongoose');

const CompradoresSchema = Schema({

    comprador: {
        type: String,
        required: [true, 'el nombre es requeido'],
    
    },
    
    apellido: {
        type: String,
    },
    
    estado: {
        type: Boolean,
        default: true
    },
    googleSingIn:{
        type: Boolean,
        default: false
    },

    rol: {
        type: String,
        required: true,
        default: 'USER',
        /* enum: ['ADMIN', 'USER'] */
    },

    password: {
        type: String,
        required: [true, 'el password es requeido'],
    },

    correo_electrónico: {
        type: String,
        required: [true, 'el correo es requeido'],
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
        
    },
});

module.exports= model('compradore', CompradoresSchema);

