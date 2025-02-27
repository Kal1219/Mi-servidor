import express from "express";
import { body, validationResult } from "express-validator";
import Publicacion from "../models/Publicacion.js";
import Usuario from "../models/Usuario.js";  // Importar el modelo de Usuario

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const publicaciones = await Publicacion.find().populate("autor", "nombre email");
      res.json(publicaciones);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener publicaciones" });
    }
  });

router.get("/usuario/:id", async (req, res) => {
    try {
      const publicaciones = await Publicacion.find({ autor: req.params.id }).populate("autor", "nombre email");
  
      if (publicaciones.length === 0) {
        return res.status(404).json({ error: "Este usuario no tiene publicaciones" });
      }
  
      res.json(publicaciones);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener publicaciones del usuario" });
    }
  });  

router.post(
    "/",
    [
      body("titulo").notEmpty().withMessage("El título es obligatorio"),
      body("contenido").notEmpty().withMessage("El contenido es obligatorio"),
      body("autor").isMongoId().withMessage("El ID del autor no es válido"),
    ],
    async (req, res) => {
      const errores = validationResult(req);
      if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
      }
  
      try {
        const { titulo, contenido, autor } = req.body;
  
        // Verificar si el usuario existe antes de crear la publicación
        const usuario = await Usuario.findById(autor);
        if (!usuario) {
          return res.status(404).json({ error: "Usuario no encontrado" });
        }
  
        const nuevaPublicacion = new Publicacion({ titulo, contenido, autor });
        await nuevaPublicacion.save();
        res.status(201).json(nuevaPublicacion);
      } catch (error) {
        res.status(500).json({ error: "Error al crear la publicación" });
      }
    }
  );

router.put(
    "/:id",
    [
      body("titulo").optional().notEmpty().withMessage("El título no puede estar vacío"),
      body("contenido").optional().notEmpty().withMessage("El contenido no puede estar vacío"),
      body("autor").optional().isMongoId().withMessage("El ID del autor no es válido"),
    ],
    async (req, res) => {
      const errores = validationResult(req);
      if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
      }
  
      try {
        const publicacion = await Publicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
        if (!publicacion) {
          return res.status(404).json({ error: "Publicación no encontrada" });
        }
  
        res.json(publicacion);
      } catch (error) {
        res.status(500).json({ error: "Error al actualizar la publicación" });
      }
    }
  );

router.delete("/:id", async (req, res) => {
    try {
      const publicacion = await Publicacion.findByIdAndDelete(req.params.id);
  
      if (!publicacion) {
        return res.status(404).json({ error: "Publicación no encontrada" });
      }
  
      res.json({ mensaje: "Publicación eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la publicación" });
    }
});  

export default router;