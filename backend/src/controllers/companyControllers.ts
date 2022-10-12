import { Request, Response } from "express";

import { createCompanyService, deleteCompanyService, readCompaniesService, readCompanyByIdService, updateCompanyService } from "../services/companyServices";

export async function createCompanyController( req : Request, res: Response ) {
    await createCompanyService(req.body);
    return res.sendStatus(201);
};

export async function readCompanyByIdController ( req : Request, res: Response ) {
    let { companyId } = req.params;
    const company = await readCompanyByIdService(Number(companyId))
    return res.send(company);
};

export async function readCompanyController( req : Request, res: Response ) {
    const companies = await readCompaniesService();
    return res.send(companies);
};

export async function updateCompanyController( req : Request, res: Response ) {
    await updateCompanyService(req.body);
    return res.sendStatus(200);  
};

export async function deleteCompanyController( req : Request, res: Response ) {
    let { companyId } = req.params;
    const id = Number(companyId);
    await deleteCompanyService({companyId: id});
    return res.sendStatus(200);
};