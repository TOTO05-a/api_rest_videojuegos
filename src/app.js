import express from "express";

import cookieParser from "cookie-parser";


import { juegoRouter } from "./routes/juego.routes.js";
import { manejarError, rutaNoEncontrada } from "./middlewares"

const app = express();


app.use((req, res, next) => {
    res.set("X-API-Version", API_VERSION);
});

app.get("/health", (req, res) => {
     res.status(200).json ({ estado: "ok", version: API_VERSIONN, servicio: "api_videojuegos" 
    });
});

   
app.get("/api/v1/preferencia", (req, res) => {
    res.json({ultimaplataforma: req.cookies.ultimaplataforma ?? null });

});

app.use("/use/api/ v1/juego", juegoRouter);

app.use(manejarError);
app.use(rutaNoEncontrada);