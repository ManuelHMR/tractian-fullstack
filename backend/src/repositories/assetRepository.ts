import { connectdb } from "../database";

export async function createAssetRepository ( assetId:number, name: string, image: string, description: string, model: string, health: number,  workStatus: "running" | "alerting" | "stopped", unitId: number) {
    const data = { assetId, name, image, description, model, health,  workStatus, unitId, status: "ok" };
    const database = await connectdb();
    const assetCollection = database.collection("assetCollection");
    return await assetCollection.insertOne(data);
};

export async function readAssetsByUnitRepository( unitId: number ) {
    const database = await connectdb();
    const assetCollection = database.collection("assetCollection");
    const assets = await assetCollection.find({unitId, status: "ok"}).toArray();
    if(assets._eventsCount === 0){
        throw{
            status: 404,
            message: "There is no registered assets in this unit!"
        }; 
    };
    return assets;
};

export async function updateAssetRepository ( assetId:number, name: string, image: string, description: string, model: string, health: number,  workStatus: "running" | "alerting" | "stopped", unitId: number ) {
    const database = await connectdb();
    const assetCollection = database.collection("assetCollection");
    return await assetCollection.updateOne({ assetId }, { $set: { name, image, description, model, health,  workStatus }})
};

export async function deleteAssetRepository( assetId: number ) {
    const database = await connectdb();
    const assetCollection = database.collection("assetCollection");
    return await assetCollection.updateOne({assetId}, {$set:{status: "deleted"}});
};