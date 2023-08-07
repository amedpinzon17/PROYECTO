import vender from "../models/vendedores.js";

const getVender = async (req, res) => {
    const equip = await vender.find();

    res.json(equip);
}


const obtenerVender = async (req, res) => {
    try{
       const auto = await vender.findOne({_id:req.params.id});
       res.json(auto);
    }catch(error){
        console.log(`${error.message}`);
    }
}

const agregarVender = async (req, res) => {
    const equit = new vender(req.body);
    try{
        const nueavoAuto = await equit.save();
        res.json(nueavoAuto);
    }catch(error){
        console.log(error.message);
    }
}

const borrarVender = async (req, res) => {
    try{
        await vender.deleteOne({_id:req.params.id});
        res.status(204).send
    }catch(error){
        res.status(404);
        res.send({_id:req.params.id});
    }
}


const actualizarVender = async (req, res) => {
    try{
        const equips = await vender.findOne({_id:req.params.id});


         if(req.body.imagen){
            equips.imagen = req.body.imagen;
        }

         if(req.body.vendedor){
            equips.vendedor = req.body.vendedor;
        }

         if(req.body.apellido){
            equips.apellido = req.body.apellido;
        }


         if(req.body.estado){
            equips.estado = req.body.estado;
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

         if(req.body.vendedor_verificado){
            equips.vendedor_verificado = req.body.vendedor_verificado;
        }

        if(req.body.reputación){
            equips.reputación = req.body.reputación;
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
   agregarVender,
    getVender ,
    obtenerVender, 
    borrarVender, 
    actualizarVender 
}