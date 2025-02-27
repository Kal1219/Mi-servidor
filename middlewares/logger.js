const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Continua con la ejecución de la ruta
};
  
export default logger;
  