const {Router} = require('express');
const {check} = require('express-validator');

const { login } = require('../controllers/auth.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const router = Router();

router.post("/login",[
    check('correo_electrónico', 'Correo es oblligatori').isEmail(),
    check('password', 'La contrseña es obligatoria').not().isEmpty(),
    validateDocuments
] ,login);

module.exports = router;