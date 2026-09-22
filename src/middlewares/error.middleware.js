export function rutaNoEncontrada(req, res){
    res.status(404).json({ error: "Ruta no encontrada", metod: req.method, url: req.originalUrl});

}

export function manejarError(error, req,res,next){
    console.error("[API error]".error);

    const status = error.statusCode || error.status || 500;
    res.status(status).json({ error: error.message || "Error interno del servidor"});
        
    }