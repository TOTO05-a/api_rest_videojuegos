import { Router } from "express";

import { crearJuefo, ListarJuegos, obtenerJuego, actualizarJuego, eliminarJuego } from "../controllers/juego.controller.js";

import { validarCrearJuego, validarActuzlizarJuego, validarJuegoId  } from "../validators/juego.validator.js";

export const juegoRouter = Router();

juegoRouter.post("/", validarCrearJuego, crearJuego);

juegoRouter.get("/", ListarJuegos);

juegoRouter.get("/:id", validarJuegoId, obtenerJuego);

juegoRouter.patch("/:id", validarJuegoId, validarActualizarJuego, actualizarJuego);

juegoRouter.delete("/:id", validarJuegoId, eliminarJuego);