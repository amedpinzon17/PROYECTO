import express from "express";

const router = express.Router();

import {getTransacciones, agregarTransacciones, obtenerTransacciones, borrarTransacciones, actualizarTransacciones} from "../controllers/transacciones.controllers.js";

router.get("/all", getTransacciones);
router.get("/all/:id", obtenerTransacciones);
router.post("/add", agregarTransacciones);
router.delete("/delete/:id",borrarTransacciones );
router.patch("/upd/:id", actualizarTransacciones);


export default router;