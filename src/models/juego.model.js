import { Schema, model } from "mongoose";

const juegoSchema = new Schema(
  {
    titulo: { 
      type: String, 
      required: [true, "El título es obligatorio"], 
      trim: true, 
      minlength: 2, 
      maxlength: 60 
    },
    genero: { 
      type: String, 
      required: [true, "El género es obligatorio"], 
      enum: ["accion", "rpg", "aventura", "estrategia", "plataformas"] 
    },
    plataforma: { 
      type: String, 
      required: [true, "La plataforma es obligatoria"], 
      enum: ["pc", "playstation", "xbox", "nintendo"] 
    },
    // Guardamos el total acumulado en minutos para mayor precisión
    minutosTotales: { 
      type: Number, 
      default: 0, 
      min: 0 
    },
    // Guarda el historial de registros de tiempo
    historialSesiones: [
      {
        minutos: { 
          type: Number, 
          required: true, 
          min: [10, "El tiempo mínimo a registrar es de 10 minutos"] 
        },
        fecha: { 
          type: Date, 
          default: Date.now 
        }
      }
    ],
    completado: { 
      type: Boolean, 
      default: false 
    }
  },
  { 
    timestamps: true, 
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Campo virtual: Convierte minutosTotales a horas jugadas automáticamente
juegoSchema.virtual("horasJugadas").get(function () {
  return Number((this.minutosTotales / 60).toFixed(1));
});

// Campo virtual: Asigna un rango dinámico según el tiempo invertido
juegoSchema.virtual("rangoJugador").get(function () {
  const horas = this.horasJugadas;
  if (horas >= 50) return "Leyenda";
  if (horas >= 20) return "Veterano";
  if (horas >= 5) return "Aficionado";
  return "Principiante";
});

export const Juego = model("Juego", juegoSchema);