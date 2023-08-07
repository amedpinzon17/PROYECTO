const transacciones = require('../models/transaciones.js');



const getUsers = (req, res) => {
     res.json({
        "message": "home pages"
    })
}
/*--------------------------------------- */

const postUsers = async (req, res) => {

    const {comprador, vendedor, estado, marca, fecha_transacción, precio_venta, método_pago, estado_pago} = req.body;
    const transa = new transacciones({comprador, vendedor, estado, marca, fecha_transacción, precio_venta, método_pago, estado_pago});


/*     const existeCorreo = await compradore.findOne({correo_electrónico});
    if(existeCorreo){
        return res.status(400).json({
            msg: "el correo ya esta registrado"
        })

    } */


    await transa.save();
    res.json({
        "message": "post api",
        transa
    });
}
/*--------------------------------------- */

const deleteUsers = (req, res) => {
    res.json({
        "message": "delete api"
    });
}
/*--------------------------------------- */

const putUsers = (req, res) => {
    res.json({
        "message": "put api"
    });
}
/*--------------------------------------- */
const patchUsers =  (req, res) => {
    res.json({
        "message": "patch api"
    });
}





module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}