import { z } from 'zod'

export const taskSchema = z.object({
    title: z.string({
        required_error: "El titulo es requerido",
        invalid_type_error: "El titulo es de tipo String"
    }).min(3, {
        message: 'El título debe tener al menos 3 caracteres.'
    }).max(35, {
        message: 'El título debe tener como maximo 40 caracteres.'
    }),

    description: z.string({
        required_error: "La descripcion es requerida",
        invalid_type_error: "La descripcion es de tipo String"
    }).min(3, {
        message: 'La descripción debe tener al menos 3 caracteres.'
    }).max(250, {
        message: 'La descripción debe tener como máximo 250 caracteres.'
    }),

    from: z.coerce.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }).refine((date) => {
        const currentDate = new Date();
        const currentDateWithoutTime = currentDate.toISOString().split('T')[0]
        const fromWithoutTime = date.toISOString().split('T')[0]
        return fromWithoutTime >= currentDateWithoutTime;
    }, {
        message: 'La fecha de inicio debe ser igual o posterior al dia actual.',
    }),
    to: z.coerce.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    })
}).refine(data => Date.parse(data.to) >= Date.parse(data.from), {
    message: 'La fecha de fin debe ser mayor o igual a la fecha de inicio '
})
