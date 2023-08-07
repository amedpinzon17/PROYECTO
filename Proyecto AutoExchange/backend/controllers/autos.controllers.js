import Automoviles from "../models/autos.js";

const getAutos = async (req, res) => {
    const equip = await Automoviles.find();

    res.json(equip);
}


const obtenerAuto = async (req, res) => {
    try{
       const auto = await Automoviles.findOne({_id:req.params.id});
       res.json(auto);
    }catch(error){
        console.log(`${error.message}`);
    }
}

const agregarAuto = async (req, res) => {
    const equit = new Automoviles(req.body);
    try{
        const nueavoAuto = await equit.save();
        res.json(nueavoAuto);
    }catch(error){
        console.log(error.message);
    }
}

const borrarAuto = async (req, res) => {
    try{
        await Automoviles.deleteOne({_id:req.params.id});
        res.status(204).send
    }catch(error){
        res.status(404);
        res.send({_id:req.params.id});
    }
}


const actualizarAuto = async (req, res) => {
    try{
        const equips = await Automoviles.findOne({_id:req.params.id});


         if(req.body.marca){
            equips.marca = req.body.marca;
        }

         if(req.body.modelo){
            equips.modelo = req.body.modelo;
        }

         if(req.body.vendedor){
            equips.vendedor = req.body.vendedor;
        }


         if(req.body.año){
            equips.año = req.body.año;
        }      

         if(req.body.imagenes){
            equips.imagenes = req.body.imagenes;
        }


         if(req.body.descripción){
            equips.descripción = req.body.descripción;
        }

         if(req.body.estados){
            equips.estados = req.body.estados;
        }

         if(req.body.estado){
            equips.estado = req.body.estado;
        }

         if(req.body.historial_mantenimiento){
            equips.historial_mantenimiento = req.body.historial_mantenimiento;
        }

         if(req.body.registros_accidentes){
            equips.registros_accidentes = req.body.registros_accidentes;
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
    getAutos,
    obtenerAuto,
    agregarAuto,
    actualizarAuto,
    borrarAuto
}