import { Request, Response } from "express";
import { createCompanyService, deleteCompanyService, readCompaniesService, updateCompanyService } from "../services/companyServices";

export async function createCompanyController( req : Request, res: Response ) {
    await createCompanyService(req.body);
    return res.sendStatus(201);
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
    await deleteCompanyService(req.body);
    return res.sendStatus(200);
};