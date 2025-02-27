import mongoose from "mongoose";

const PublicacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }, // Relación con Usuario
}, { timestamps: true });

export default mongoose.model("Publicacion", PublicacionSchema);