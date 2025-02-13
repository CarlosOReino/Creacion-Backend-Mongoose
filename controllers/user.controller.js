import {connectToDatabase, createUser, updateUser, deleteUser} from "../models/user.model.js";

export async function conn(){
    await connectToDatabase();
    console.log('Conectado a MongoDB');
}
// Crear usuario
export async function createNewUser(req, res) {
    const { name, email, age } = req.body;
    await createUser({ name, email, age });
    res.json({ message: 'Usuario creado' });
}

// actualizar usuario
export async function updateUserDB(req, res) {
    const { id } = req.params;
    const { name, email, age } = req.body;
    await updateUser(id, { name, email, age });
    res.json({ message: 'Usuario actualizado' });   
}

// eliminar usuario
export async function deleteUserDB(req, res) {
    const { id } = req.params;
    await deleteUser(id);
    res.json({ message: 'Usuario eliminado' });
}