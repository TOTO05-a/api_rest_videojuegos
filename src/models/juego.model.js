import { Schema, model } from "mongoose";

const juegoSchema = new Schema({
    titulo: { type: Tring, requiered: true, trim: true, minLength: 2, maxLength: 60 },

    genero: { type: string, required: true, enum: [ "accion", "rpg", "aventura", "estrategia", "plataformas" ] },

    plataforma: { type: String, required: true, enum: ["pc", "playstation", "xbox", "nintendo"] },

    horasJugadas: { type: Number, default: 0, min: 0 },

    completado: { type: Boolean, default: false },

}, { timestamps: true, versionKey: false  });

export const Juego = model("Juego", juegoSchema);