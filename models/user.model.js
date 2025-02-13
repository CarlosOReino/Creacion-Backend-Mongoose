import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// Definición del esquema y modelo

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
  });
  
  const User = mongoose.model('User', userSchema);
  // Conexión a MongoDB
  export async function connectToDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
    }).then(() => {
      console.log('Conectado a MongoDB');
    }).catch(err => {
      console.error('Error de conexión a MongoDB:', err);
    });
}
  // Operaciones CRUD
  
  // Create
  export async function createUser(userData) {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      console.log('Usuario creado:', savedUser);
      return savedUser;
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  }
  
  // Read (all users)
  export async function getAllUsers() {
    try {
      const users = await User.find();
      console.log('Todos los usuarios:', users);
      return users;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }
  
  // Read (single user)
  export async function getUserById(id) {
    try {
      const user = await User.findById(id);
      if (user) {
        console.log('Usuario encontrado:', user);
        return user;
      } else {
        console.log('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al buscar usuario:', error);
    }
  }
  
  // Update
  export async function updateUser(id, updateData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
      if (updatedUser) {
        console.log('Usuario actualizado:', updatedUser);
        return updatedUser;
      } else {
        console.log('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  }
  
  // Delete
  export async function deleteUser(id) {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (deletedUser) {
        console.log('Usuario eliminado:', deletedUser);
        return true;
      } else {
        console.log('Usuario no encontrado');
        return false;
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  }
  