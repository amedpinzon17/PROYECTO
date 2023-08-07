const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {

    constructor(){
        this.app = express();
       
        //middlewares
        this.middlewares();

        this.port = process.env.PORT

        this.usuariosPath = "/api/compradores";
        this.vendedoresPath = "/api/vendedores";
        this.transaccionesPath = "/api/transacciones";
        this.authPath = "/api/auth";

        this.connectDB();

         //rutas
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
      this.app.use(this.authPath, require('../routes/auth.routes.js'));
      this.app.use(this.usuariosPath, require('../routes/compradores.routes.js'));
      this.app.use(this.vendedoresPath, require('../routes/vendedores.routes.js'));
      this.app.use(this.transaccionesPath, require('../routes/transacciones.routes.js'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}


module.exports = Server;