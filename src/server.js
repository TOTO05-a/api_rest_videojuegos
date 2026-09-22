import mongoose from "mongoose";
import app from "./app.js";

const PORT = proces.env.PORT || 3000;
const MONGO_IRI = process.env.MONGO_URI || "mongodb://127.0.0.1/api_juegos_clase";

try {
    await mongoose.connect(MONGO_URI);

    console.log ("videojiego conectado a mongodb",  MONGO_URI);

}
catch (error) {

    console.error(" Error al conectar a mongoDB:" , error.message);
    process.exit(1);
}

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});