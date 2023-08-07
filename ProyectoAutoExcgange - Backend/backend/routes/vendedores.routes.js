const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const Role = require('../models/Role.js');

const {getUsers, postUsers, deleteUsers, putUsers, patchUsers} = require('../controllers/vendedores.controllers.js');


const router = Router();


    router.get("/", getUsers);
    router.put("/", putUsers);
    router.post("/",[
        check('vendedor', 'el Vendedor no es valido').not().isEmpty(),
        check('vendedor_verificado', 'el vendedor esta verificado').not().isEmpty(),
        check('password', 'el password debe ser de minimo de sais caracteres').isLength({min: 5}),
        check('correo_electrónico', 'el correo no es valido').isEmail(),
        /* check('rol', 'No es un rol valido').isIn(['ADMIN', 'USER']), */
        check('rol').custom(async(rol = '') => {
            const existeRol = await Role.findOne({rol});
            if(!existeRol){
                throw new Error(`el rol ${rol} no esta reguistrado en la base de datos`);
            }
        }),
        validateDocuments

    ] ,postUsers );
    router.delete("/", deleteUsers );
    router.patch("/", patchUsers);




module.exports = router;
