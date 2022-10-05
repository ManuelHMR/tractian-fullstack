import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let database: any;
const mongoClient = new MongoClient(process.env.MONGO_URI);

async () => {
    try{
        await mongoClient.connect();
        database = mongoClient.db('tractian');
    } catch (err) {
        console.log("Erro ao conectar no MongoDB");
    }
}

export default database;