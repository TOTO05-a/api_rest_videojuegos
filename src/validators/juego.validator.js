import { body, param, validationResult } from "express-validator";

const respoderErrores = (req,res,next) =>
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }

    export const GENEROS_VALIDOS = [ "accion", "rpg", "aventura", "estrategia", "plataformas" ];

    export const PLATAFORMAS_VALIDAS = ["pc", "playstation", "xbox", "nintendo"];

    export const validarCrearJuego =  [
        body("titulo").trim().isLength({min: 2, max: 60 }).withMessage("El titulo debe tener entre 2 y 60 caracteres"),

        body("genero").trim().toLowerCase().isIn(GENEROS_VALIDOS).withMessage(`Los generos validos son ${GENEROS_VALIDOS}` ),

body("plataforma".trim().toLoweCase().isIn(PLATAFORMAS_VALIDAS).withMessage(`Las plataformas validas son: ${PLATAFORMAS_VALIDAS}`)) ,

body("horasJugadas").optional()isIn({min: 0}).withMessage("Las horas jugadas deben ser un valor booleano"),

body("completado").optional().isBoolean().withMessage("El estado "),

        responderErrores,
    ];


    export const validarJuegoId = [
        param("id").idMongoId()withMessage("El id del videojuego no es un ObjectId de MongoDB valido"),

        responderErrores,
    ];