import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "nombre de usuario requerido"],
        unique: true,
        trim: true,
        maxLength: [25, "El nombre de usuario debe tener como máximo 25 caracteres"],
    },
    email: {
        type: String,
        required: [true, "correo electrónico requerido"],
        unique: true,
        trim: true,
        minLength: [3, "El correo electrónico debe tener como minimo 3 caracteres"]
    },
    password: {
        type: String,
        required: [true, "contraseña requerida"],
        minLength: [6, 'La contraseña debe tener como minimo 6 caracteres']
    },
    confirmPassword: {
        type: String,
        required: [true, "contraseña requerida"],
        minLength: [6, 'La contraseña debe tener como minimo 6 caracteres']
    },
})