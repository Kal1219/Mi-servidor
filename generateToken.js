import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const payload = { id: "67bf30c7712d393db9d48a2a" }; // Reemplaza "user_id" con el ID del usuario
const secret = process.env.JWT_SECRET;
const options = { expiresIn: "1h" };

const token = jwt.sign(payload, secret, options);
console.log("Token generado:", token);