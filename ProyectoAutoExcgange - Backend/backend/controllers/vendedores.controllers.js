const vendedore = require('../models/vendedores.js');
const bcryptjs = require('bcryptjs');



const getUsers = (req, res) => {
     res.json({
        "message": "home pages"
    })
}
/*--------------------------------------- */

const postUsers = async (req, res) => {

    const {vendedor, apellido, estado, correo_electrónico, fecha_de_nacimiento, dirección, password,ciudad, número_telefónico, reputación, vendedor_verificado} = req.body;
    const vendido = new vendedore({vendedor, apellido, estado, correo_electrónico, fecha_de_nacimiento, dirección, password,ciudad, número_telefónico, reputación, vendedor_verificado});


    const existeCorreo = await vendedore.findOne({correo_electrónico});
    if(existeCorreo){
        return res.status(400).json({
            msg: "el correo ya esta registrado"
        })

    }

    const salt = bcryptjs.genSaltSync();
    vendido.password = bcryptjs.hashSync(password, salt);

    await vendido.save();
    res.json({
        "message": "post api",
        vendido
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
