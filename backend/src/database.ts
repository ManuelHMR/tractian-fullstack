import { MongoClient } from "mongodb";
import "dotenv/config";

export async function connectdb() {
    let database: any;
    try{
        const mongoClient = new MongoClient( process.env.MONGO_URI as string);
        await mongoClient.connect();
        database = mongoClient.db('tractian');
    } catch (err) {
        console.log("Erro ao conectar no MongoDB");
    };
    return database
};