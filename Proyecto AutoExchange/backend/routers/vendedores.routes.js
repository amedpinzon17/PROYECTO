import express from "express";

const router = express.Router();

import {agregarVender, getVender ,obtenerVender, borrarVender, actualizarVender} from "../controllers/vendedores.controllers.js";

router.get("/all", getVender);
router.get("/all/:id", obtenerVender);
router.post("/add", agregarVender);
router.delete("/delete/:id", borrarVender);
router.patch("/upd/:id", actualizarVender);


export default router;