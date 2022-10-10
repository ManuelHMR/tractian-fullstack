import { Request, Response } from "express";

import { createAssetService, deleteAssetService, readAssetsByUnitService, updateAssetService } from "../services/assetServices";

export async function createAssetController ( req: Request, res: Response ) {
    await createAssetService(req.body);
    return res.sendStatus(201);
};

export async function readAssetsByUnitController( req: Request, res: Response ) {
    const assets = await readAssetsByUnitService(req.body);
    return res.send(assets);
};

export async function updateAssetsController( req: Request, res: Response ) {
    await updateAssetService(req.body);
    return res.sendStatus(200);
};

export async function deleteAssetController( req: Request, res: Response ) {
    await deleteAssetService(req.body);
    return res.sendStatus(200);
};