import { connectdb } from "../database";

export async function createUnitRepository ( name: string, companyId: number, unitId: number ) {
    const data = { name, companyId, unitId, status: "ok" };
    const database = await connectdb();
    const unitCollection = database.collection("unitCollection");
    return await unitCollection.insertOne(data);
};

export async function readUnitsByCompanyRepository ( companyId: number ) {
    const database = await connectdb();
    const unitCollection = database.collection("unitCollection");
    const units = await unitCollection.find({companyId, status: "ok"}).toArray();
    if(units._eventsCount === 0){
        throw{
            status: 404,
            message: "There is no registered units in this company!"
        }; 
    };
    return units;
};

export async function updateUnitRepository ( name: string, unitId: number) {
    const database = await connectdb();
    const unitCollection = database.collection("unitCollection");
    return await unitCollection.updateOne({unitId}, {$set:{ name }}); 
};

export async function deleteUnitRepository( unitId: number) {
    const database = await connectdb();
    const unitCollection = database.collection("unitCollection");
        return await unitCollection.updateOne({unitId}, {$set:{status: "deleted"}}); 
};