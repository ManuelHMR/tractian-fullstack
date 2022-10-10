import { Request, Response } from "express";
import { createCompanyService } from "../services/companyServices";

export async function createCompanyController( req : Request, res: Response ) {
    await createCompanyService(req.body);
    return res.sendStatus(201);
};

export async function readCompanyController( req : Request, res: Response ) {
    
};

export async function updateCompanyController( req : Request, res: Response ) {
    
};

export async function deleteCompanyController( req : Request, res: Response ) {
    
};