import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";
import publicacionesRoutes from "./routes/publicaciones.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.js";
import authMiddleware from "./middlewares/auth.js"; // Importar el middleware de autenticación

dotenv.config();

const app = express();

app.use(cors()); // Habilitar CORS para todas las peticiones
app.use(express.json());
app.use(logger);
app.use(errorHandler);
app.use("/auth", authRoutes);
app.use("/usuarios", authMiddleware, usuariosRoutes); // Proteger la ruta /usuarios con el middleware de autenticación
app.use("/publicaciones", publicacionesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});