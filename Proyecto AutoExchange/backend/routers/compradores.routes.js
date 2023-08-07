import express from "express";

const router = express.Router();

import {agregarComprar, getComprar ,obtenerComprar, borrarComprar, actualizarComprar} from "../controllers/compradores.controllers.js";

router.get("/all", getComprar);
router.get("/all/:id", obtenerComprar);
router.post("/add", agregarComprar);
router.delete("/delete/:id", borrarComprar);
router.patch("/upd/:id", actualizarComprar);


export default router;