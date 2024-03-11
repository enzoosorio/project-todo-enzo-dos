import { NextResponse } from "next/server";
import { connectToDatabase } from '@/utils/connectionMongoDB'
import UserTasks from '@/models/Task'
import { taskSchema } from "@/validations/taskSchema";

export async function GET() {
    connectToDatabase()
    const results = await UserTasks.find()

    return NextResponse.json(results)
}

export async function POST(request) {
    try {
        connectToDatabase();
        const data = await request.json();

        const resultZodValidation = taskSchema.safeParse(data)

        if (!resultZodValidation.success) {
            return NextResponse.json(resultZodValidation.error)
        }

        console.log(resultZodValidation)

        const newTask = new UserTasks(data);

        const savedTask = await newTask.save();
        console.log("Tarea creada:", savedTask);

        return NextResponse.json(savedTask);

    } catch (error) {
        return NextResponse.json({
            error: "Error al crear la tarea"
        }, { status: 400 });
    }
}

export async function DELETE() {
    connectToDatabase();
    const documentsDeleted = await UserTasks.deleteMany()
    return NextResponse.json(documentsDeleted);
}