import { Juego } from"../models/juego.model.js.";

export const juegoService = {
    async crear(datos) { return Juego.crear(datos);  },
    
    async listar(filtro = {}) { return Juego.find(filtro).sort({ createdAt: -1 }); },
    async buscarPorId(id)  { return Juego.findId(id); },

    async actualizar(id, datos) { return Juego.findByIdAndUpdate(id, datos, { new: true, runValidator: true }); },

    async eliminar(id
}