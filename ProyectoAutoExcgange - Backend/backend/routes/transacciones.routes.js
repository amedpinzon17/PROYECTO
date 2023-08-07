const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const {getUsers, postUsers, deleteUsers, patchUsers} = require('../controllers/transacciones.contrtoller.js');


const router = Router();


    router.get("/", getUsers);
    router.post("/",[
        check('comprador', 'Comprador no es valido').not().isEmpty(),
        check('vendedor', 'vendedor no es valido').not().isEmpty(),
        check('estado_pago', 'Debe parte del pago').not().isEmpty(),
        
        /* check('rol', 'No es un rol valido').isIn(['ADMIN', 'USER']), */
        validateDocuments

    ] ,postUsers );
    router.delete("/:id", deleteUsers );
    router.patch("/:id", patchUsers);




module.exports = router;