import { Request, Response } from "express";
import { createUserService, readUserByCompanyService } from "../services/userServices";

export async function createUserController( req : Request, res :  Response ) {
    await createUserService(req.body);
    return res.sendStatus(201);
};

export async function readUserController( req : Request, res :  Response ) {
    const users = await readUserByCompanyService(req.body);
    return res.send(users);
};

export async function updateUserController( req : Request, res :  Response ) {
    
};

export async function deleteUserController( req : Request, res :  Response ) {
    
};