import express from "express";
import { body, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Ruta protegida: Obtener lista de usuarios (solo autenticados)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-password"); // No mostramos contraseñas
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

export default router;