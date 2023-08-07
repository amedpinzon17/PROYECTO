import Comprar from "../models/compradores.js";

const getComprar = async (req, res) => {
    const equip = await Comprar.find();

    res.json(equip);
}


const obtenerComprar = async (req, res) => {
    try{
       const auto = await Comprar.findOne({_id:req.params.id});
       res.json(auto);
    }catch(error){
        console.log(`${error.message}`);
    }
}

const agregarComprar = async (req, res) => {
    const equit = new Comprar(req.body);
    try{
        const nueavoAuto = await equit.save();
        res.json(nueavoAuto);
    }catch(error){
        console.log(error.message);
    }
}

const borrarComprar = async (req, res) => {
    try{
        await Comprar.deleteOne({_id:req.params.id});
        res.status(204).send
    }catch(error){
        res.status(404);
        res.send({_id:req.params.id});
    }
}


const actualizarComprar = async (req, res) => {
    try{
        const equips = await Comprar.findOne({_id:req.params.id});


         if(req.body.comprador){
            equips.comprador = req.body.comprador;
        }

         if(req.body.apellido){
            equips.apellido = req.body.apellido;
        }

         if(req.body.estado){
            equips.estado = req.body.estado;
        }


         if(req.body.password){
            equips.password = req.body.password;
        }      

         if(req.body.correo_electrónico){
            equips.correo_electrónico = req.body.correo_electrónico;
        }


         if(req.body.fecha_de_nacimiento){
            equips.fecha_de_nacimiento = req.body.fecha_de_nacimiento;
        }

         if(req.body.dirección){
            equips.dirección = req.body.dirección;
        }

         if(req.body.ciudad){
            equips.ciudad = req.body.ciudad;
        }

         if(req.body.número_telefónico){
            equips.número_telefónico = req.body.número_telefónico;
        }



        await equips.save();
        res.send(equips);

    }catch(error){
        console.log(error);
        res.status(404)
        res.send({error: "no existe"})
    }
}

export {
    getComprar,
    obtenerComprar,
    agregarComprar,
    actualizarComprar,
    borrarComprar
}