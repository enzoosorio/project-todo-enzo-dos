import { NextResponse } from "next/server";
import { connectToDatabase } from '@/utils/connectionMongoDB'
import UserTasks from '@/models/Task'


export async function GET(_, { params }) {
    try {
        connectToDatabase()
        const results = await UserTasks.findById(params.id)

        if (!results) {
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })
        }

        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}

export async function PUT(request, { params }) {
    try {
        connectToDatabase()
        const data = await request.json()
        const results = await UserTasks.findByIdAndUpdate(params.id, data, { new: true })

        if (!results) {
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })
        }

        return NextResponse.json(results)

    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }

}

export async function DELETE(_, { params }) {
    try {
        connectToDatabase()
        const results = await UserTasks.findByIdAndDelete(params.id)

        if (!results) {
            return NextResponse.json({
                message: "Task not found",
            }, {
                status: 404
            })
        }

        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}