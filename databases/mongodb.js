import {mongoose} from "mongoose";

// Conexión a MongoDB
export function conn() {
    mongoose
    .connect("mongodb://127.0.0.1:27017/testdb", {})
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((err) => {
      console.error("Error de conexión a MongoDB:", err);
    });
}
