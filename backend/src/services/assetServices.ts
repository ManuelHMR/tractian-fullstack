import { createAssetRepository, deleteAssetRepository, readAssetsByUnitRepository, updateAssetRepository } from "../repositories/assetRepository";
import { generateId } from "../utils/generateId";

export async function createAssetService ( asset : { name: string, image: string, description: string, model: string, health: number, workStatus: "running" | "alerting" | "stopped", unitId: number }) {
    const assetId = await generateId("assetCollection");
    return await createAssetRepository(assetId, asset.name, asset.image, asset.description, asset.model, asset.health, asset.workStatus, asset.unitId);
};

export async function readAssetsByUnitService (asset : { unitId : number }) {
    return await readAssetsByUnitRepository( asset.unitId );
};

export async function updateAssetService ( asset : { assetId: number, name: string, image: string, description: string, model: string, health: number, workStatus: "running" | "alerting" | "stopped", unitId: number }) {
    return await updateAssetRepository( asset.assetId, asset.name, asset.image, asset.description, asset.model, asset.health, asset.workStatus, asset.unitId );
};

export async function deleteAssetService ( asset : { assetId: number }) {
    return await deleteAssetRepository( asset.assetId );
};