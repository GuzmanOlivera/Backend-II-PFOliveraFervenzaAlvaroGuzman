import User from '../models/user.model.js';

class UserManager {
    async createUser(userDTO) {
        try {
            const newUser = new User(userDTO);

            return await newUser.save();
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            throw new Error("Error al crear el usuario");
        }
    }

    async getUsers() {
        try {
            return await User.find();
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw new Error("Error al obtener usuarios");
        }
    }

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.error("Error al obtener usuario por ID:", error);
            throw new Error("Error al obtener usuario por ID");
        }
    }

    async findOne(query){
        return await User.findOne(query); 
    }

    async updateUser(id, userDTO) {
        try {
            return await User.findByIdAndUpdate(id, userDTO, { new: true });
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            throw new Error("Error al actualizar el usuario");
        }
    }

    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            throw new Error("Error al eliminar el usuario");
        }
    }
}

export default new UserManager();
