//esto lo usare cuando deba agregar un nuevo usuario mas adelante.
//seguro faltan MAS campos pero por el momento he puesto estos. 

import { z } from 'zod'

export const userSchema = z.object({
    // name: z.string().min(3, {
    //     message: 'El nombre debe tener al menos 3 caracteres.'
    // }).max(100, {
    //     message: 'El nombre debe tener como maximo 35 caracteres.'
    // }),
    email: z.string({
        required_error: "El correo es requerido."
    }).email({
        message: 'El email colocado es incorrecto.'
    }),
    password: z.string({
        required_error: "La contraseña es requerida."
    }).min(6, {
        message: 'La contraseña debe tener más de 6 caracteres.'
    })

})