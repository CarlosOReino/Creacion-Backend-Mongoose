import express, {json} from 'express';
import { conn, createNewUser, updateUserDB, deleteUserDB } from './controllers/user.controller.js';


const app = express();
app.use(json());

app.get("/", conn);

app.post("/create-user", createNewUser);

app.put("/update-user/:id", updateUserDB);

app.delete("/delete-user/:id", deleteUserDB);
app.listen(3000);
console.log('Servidor en', 3000);