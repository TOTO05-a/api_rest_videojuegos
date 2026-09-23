export class CrearJuegoDTO {
  constructor(data) {
    this.titulo = data.titulo?.trim();
    this.genero = data.genero?.trim().toLowerCase();
    this.plataforma = data.plataforma?.trim().toLowerCase();
    this.minutosTotales = Number(data.minutosTotales ?? 0);
    this.completado = Boolean(data.completado ?? false);
  }
}

export class ActualizarJuegoDTO {
  constructor(data) {
    if (data.titulo !== undefined) this.titulo = data.titulo?.trim();
    if (data.genero !== undefined) this.genero = data.genero?.trim().toLowerCase();
    if (data.plataforma !== undefined) this.plataforma = data.plataforma?.trim().toLowerCase();
    if (data.minutosTotales !== undefined) this.minutosTotales = Number(data.minutosTotales);
    if (data.completado !== undefined) this.completado = Boolean(data.completado);
  }
}

// DTO para transformar la respuesta enviada al cliente
export class RespuestaJuegoDTO {
  constructor(juego) {
    this.id = juego._id;
    this.titulo = juego.titulo;
    this.genero = juego.genero;
    this.plataforma = juego.plataforma;
    this.minutosTotales = juego.minutosTotales;
    this.horasJugadas = juego.horasJugadas;
    this.rangoJugador = juego.rangoJugador;
    this.completado = juego.completado;
    this.historialSesiones = juego.historialSesiones || [];
    this.creadoEn = juego.createdAt;
  }
}