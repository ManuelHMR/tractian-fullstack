import { Request, Response } from "express";

import { createUnitService, deleteUnitService, readUnitsByCompanyService, updateUnitService } from "../services/unitServices";

export async function createUnitController ( req: Request, res: Response) {
    await createUnitService(req.body);
    return res.sendStatus(201);
};

export async function readUnitsByCompanyController ( req: Request, res: Response) {
    const units = await readUnitsByCompanyService(req.body);
    return res.send(units);
};

export async function updateUnitController ( req: Request, res: Response) {
    await updateUnitService(req.body);
    return res.sendStatus(200);
};

export async function deleteUnitController ( req: Request, res: Response) {
    await deleteUnitService(req.body);
    return res.sendStatus(200);
};