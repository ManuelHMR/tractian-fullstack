import { connectdb } from "../database";

export async function generateId( collection: string ) {
    const database = await connectdb();
    const thisConnection = database.collection(collection);
    return await thisConnection.count();
};