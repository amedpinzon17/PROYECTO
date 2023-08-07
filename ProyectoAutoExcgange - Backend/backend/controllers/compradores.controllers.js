const compradore = require('../models/compradores.js');
const bcryptjs = require('bcryptjs');



const getUsers = (req, res) => {
     res.json({
        "message": "home pages"
    })
}
/*--------------------------------------- */

const postUsers = async (req, res) => {

    const {comprador, apellido, estado, rol, password, correo_electrónico, fecha_de_nacimiento, dirección, ciudad, número_telefónico} = req.body;
    const comprado = new compradore({comprador, apellido, estado, rol, password, correo_electrónico, fecha_de_nacimiento, dirección, ciudad, número_telefónico});


    const existeCorreo = await compradore.findOne({correo_electrónico});
    if(existeCorreo){
        return res.status(400).json({
            msg: "el correo ya esta registrado"
        })

    }

    const salt = bcryptjs.genSaltSync();
    comprado.password = bcryptjs.hashSync(password, salt);

    await comprado.save();
    res.json({
        "message": "post api",
        comprado
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