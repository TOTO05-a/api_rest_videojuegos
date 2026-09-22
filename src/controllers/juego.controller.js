import { CrearJuegoDTO, ActualizarJuegoDTO } from "../dtos/juego.dto.js"

import { juegoServicec } from "../services/juego.service.js"

export async function crearJuego(req, res, next) {
    try {
    const datos = new CrearJuegoDTO(req.body);
    
    const juego = await juegoService.crear(datos);


     res.cookie("ultimaPlataforma", juego.plataforma,{
        httpOnly: true,
        saameSite: true
     })
}



export async function listarJuegos(req, res, next){

    try {
        const filtro = {} ;
        if (req.query.platafora) filtro.plataforma = req.query.plataforma .toLowerCase();

        if (req.query.genero) filtro.genero = req.query.genero.toLowerCase();

   const juegos = await juegoService.listar(filtro);
   res.json({ data: juegos });

} catch (error) { next(error); }
}

export async function obtenerJuego(req, res, next) {
    try {
    const juego = await juegoService.buscarPorId(req,res,next);

    if (!juego) return res.status(404).json({ error: "Videojuego no encintrado" });

    }catch (error) }

export async function actualizarJuego (req, res, next){
     try{
        const datos = new ActualizarJuegoDTO(req.body)
        
         }
}


export async function eliminarJuego(req, res, next) {
    try{
    const juego = await juegoService.eliminar(req.param.bosy);

    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado" });

    res.status(204).send();

} catch (error) { next(error); }

}
