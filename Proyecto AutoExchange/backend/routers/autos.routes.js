import express from "express";

const router = express.Router();

import {agregarAuto, getAutos ,obtenerAuto, borrarAuto, actualizarAuto} from "../controllers/autos.controllers.js";

router.get("/all", getAutos);
router.get("/all/:id", obtenerAuto);
router.post("/add", agregarAuto);
router.delete("/delete/:id", borrarAuto);
router.patch("/upd/:id", actualizarAuto);


export default router;