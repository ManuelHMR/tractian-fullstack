import { createCompanyRepository, deleteCompanyRepository, readCompaniesRepository, readCompanyByIdRepository, updateCompanyRepository } from "../repositories/companyRepository";
import { generateId } from "../utils/generateId";

export async function createCompanyService( company : { name: string } ) {
    const companyId = await generateId("companyCollection"); 
    return await createCompanyRepository(company.name, companyId);
};

export async function readCompanyByIdService(companyId : number) {
    return await readCompanyByIdRepository(companyId);
};

export async function readCompaniesService() {
    return await readCompaniesRepository();
};

export async function updateCompanyService( company : { name: string, companyId: number }) {
    return await updateCompanyRepository(company.name, company.companyId);
};

export async function deleteCompanyService ({companyId} : { companyId : number }) {
    return await deleteCompanyRepository(companyId);
};