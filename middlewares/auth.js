import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  try {
    const tokenLimpio = token.replace("Bearer ", "").trim();
    const decoded = jwt.verify(tokenLimpio, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error); // Agregar log para verificar el error
    res.status(403).json({ error: "Token inválido." });
  }
};

export default authMiddleware;