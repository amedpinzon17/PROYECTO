import Transacciones from "../models/transacciones.js";

const getTransacciones = async (req, res) => {
    const equip = await Transacciones.find();

    res.json(equip);
}


const obtenerTransacciones = async (req, res) => {
    try{
       const auto = await Transacciones.findOne({_id:req.params.id});
       res.json(auto);
    }catch(error){
        console.log(`${error.message}`);
    }
}

const agregarTransacciones = async (req, res) => {
    const equit = new Transacciones(req.body);
    try{
        const nueavoAuto = await equit.save();
        res.json(nueavoAuto);
    }catch(error){
        console.log(error.message);
    }
}

const borrarTransacciones = async (req, res) => {
    try{Transacciones.deleteOne({_id:req.params.id});
        res.status(204).send
    }catch(error){
        res.status(404);
        res.send({_id:req.params.id});
    }
}


const actualizarTransacciones = async (req, res) => {
    try{
        const equips = await Transacciones.findOne({_id:req.params.id});


         if(req.body.comprador){
            equips.comprador = req.body.comprador;
        }

         if(req.body.vendedor){
            equips.vendedor = req.body.vendedor;
        }

         if(req.body.estado){
            equips.estado = req.body.estado;
        }


         if(req.body.fecha_transacción){
            equips.fecha_transacción = req.body.fecha_transacción;
        }      

         if(req.body.precio_venta){
            equips.precio_venta = req.body.precio_venta;
        }


         if(req.body.método_pago){
            equips.método_pago = req.body.método_pago;
        }

         if(req.body.estado_pago){
            equips.estado_pago = req.body.estado_pago;
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
    getTransacciones,
    obtenerTransacciones,
    agregarTransacciones,
    actualizarTransacciones,
    borrarTransacciones
}