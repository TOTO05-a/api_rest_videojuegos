import {body,param,validationResult} from "express-validator";

const responderErrores=(req,res,next)=>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        }
}



export const GENEROS_VALIDOS=["accion","rpg","aventura","estrategia","plataformas"];
export const PLATAFORMAS_VALIDAS=["pc","playstation","xbox","nintendo"];

export const validarCrearJuego = [
    body("titulo").trim().isLength({min:2,max:60}).withMessage("El titulo debe tener entre 2 y 60 caracteres"),
    body("genero").trim().toLowerCase().isIn(GENEROS_VALIDOS).withMessage("El género no es válido"),
    body("plataforma").trim().toLowerCase().isIn(PLATAFORMAS_VALIDAS).withMessage("La plataforma no es válida"),
    body("horasJugadas").trim().toLowerCase().isInt({min:0}).withMessage("Las horas jugadas deben ser un número entero "),
    body("completado").optional().isBoolean().withMessage("El campo completado debe ser un valor booleano"),
];


export const validarActualizarJuego=[
    body("titulo").optional().trim().isLength({min:2,max:60}).withMessage("El titulo debe tener entre 2 y 60 caracteres"),
    body("genero").optional().trim().toLowerCase().isIn(GENEROS_VALIDOS).withMessage("El género no es válido"),
    body("plataforma").optional().trim().toLowerCase().isIn(PLATAFORMAS_VALIDAS).withMessage("La plataforma no es válida"),
    body("horasJugadas").optional().trim().isInt({min:0}).withMessage("Las horas jugadas deben ser un número entero "),
    body("completado").optional().isBoolean().withMessage("El campo completado debe ser un valor booleano"),
]

export const validarJuegoId=[
    param("id").isMongoId().withMessage("El id del videojuego no es un ObjectId de MongoDB válido"),
    responderErrores,
];