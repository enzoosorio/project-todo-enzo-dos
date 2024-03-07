import mongoose from "mongoose";
import validate from 'mongoose-validator'

var titleValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between 3 and 50 characters'
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only'
    })
];

const userTasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "titulo requerido"],
        unique: true,
        trim: true,
        maxLength: [35, "El titulo debe tener como máximo 35 caracteres"]

    },
    description: {
        type: String,
        required: [true, "descripcion requerida"],
        maxLength: [250, `El numero de caracteres no debe pasar de 250.`]
    },
    from: {
        type: Date,
        required: [true, "fecha de inicio requerida"]
    },
    to: {
        type: Date,
        required: [true, "fecha de fin requerida"]
    }

}, {
    timestamps: true
});

export default mongoose.models.UserTasks || mongoose.model('UserTasks', userTasksSchema);

