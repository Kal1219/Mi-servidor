import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", data);
      localStorage.setItem("token", response.data.token);
      alert("Inicio de sesión exitoso");
      navigate("/dashboard"); // Redirige después de iniciar sesión
    } catch (error) {
      alert("Error al iniciar sesión: " + (error.response?.data?.error || "Desconocido"));
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}

export function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await axios.post("http://localhost:3000/auth/register", data);
      alert("Registro exitoso, ahora puedes iniciar sesión");
      navigate("/login");
    } catch (error) {
      alert("Error al registrarse: " + (error.response?.data?.error || "Desconocido"));
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
}
