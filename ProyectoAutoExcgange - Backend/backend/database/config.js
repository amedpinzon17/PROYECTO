const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB ONLINE');
    }catch(error){
        console.log(error);
        throw new Error('LA BASE DE DATOS NO SE PUDO INICIALIZAR');
    }
}

module.exports = {
    dbConnection
}