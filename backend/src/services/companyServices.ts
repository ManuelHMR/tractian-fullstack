import { createCompanyRepository } from "../repositories/companyRepository";
import { generateId } from "../utils/generateId";

export async function createCompanyService( user : { name: string } ) {
    const companyId = await generateId("companyCollection"); 
    return await createCompanyRepository(user.name, companyId);
};