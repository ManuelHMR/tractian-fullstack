import { createUserRepository, readUserRepository, readUsersByCompanyRepository } from "../repositories/userRepository";

export async function createUserService( user : { name: string, companyId : number } ) {
    return await createUserRepository( user.name, user.companyId);
};

export async function readUserService( userId : number ) {
    return await readUserRepository( userId );
};

export async function readUserByCompanyService( { companyId } : { companyId : number } ) {
    return await readUsersByCompanyRepository( companyId );
};