import Express from "express";
import dotenv from "dotenv";
import conectarDb from "./config/config.js";
import AutosRouter from "./routers/autos.routes.js";
import TransaccionesRouter from "./routers/transacciones.routes.js";
import CompradoresRouter from "./routers/compradores.routes.js";
import VendedoresRouter from "./routers/vendedores.routes.js"; 

import cors from "cors";

const app = Express();
app.use(Express.json());

dotenv.config();

const corsOptions = {
  methods: ["GET" , "POST" , "PATCH" , "DELETE"]
}
app.use(cors(corsOptions));


app.use("/autos", AutosRouter);
app.use("/transacciones", TransaccionesRouter);
app.use("/compradores", CompradoresRouter);
app.use("/vendedores", VendedoresRouter)



const PORT = process.env.PORT;

conectarDb();


app.listen(PORT, () => {
  console.log(`Servidor rodando en puerto ${PORT}`);
});
