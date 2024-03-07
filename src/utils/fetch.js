import { connectToDatabase } from "./connectionMongoDB"
import UserTasks from '@/models/Task'

export async function FetchTasks() {
    connectToDatabase();
    const taskFetched = await UserTasks.find();
    return taskFetched
}


export async function DeleteAllTodos() {
    const res = await fetch("/api/task", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    });

    return res
}

export async function FetchById(id) {
    connectToDatabase();
    const taskFetched = await UserTasks.findById(id);
    return taskFetched
}
