const {response} = require('express');
const compradores = require('../models/compradores');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWT');


const login = async (req, res = response) => {
    const {correo_electrónico, password} = req.body;
    try{

        const correo = await compradores.findOne({correo_electrónico});
        if(!correo){
            return res.status(400).json({
                msg: "Correo no existe"
            });
        }


       if(correo.estado === false){
            return res.status(400).json({
                msg: "El correo no esta activo"
            });
        } 

        const passwordValido = bcryptjs.compareSync(password,correo.password);

        if(!passwordValido){
            return res.status(400).json({
                msg: "la contraseña es incorrecta"
            });
        }


        //! generacion para validacion para json web token

        const token = await generateJWT(correo.id)



        res.json({
                correo,
                token
            })
    }catch(error){
        console.log(error);
        return res.json({
            msg: "datos insuficientes, contacte a servicio ternico"
        })
    }
   
}

module.exports = {
    login
}