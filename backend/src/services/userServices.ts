import { createUserRepository, deleteUserRepository, generateUserId, readUserRepository, readUsersByCompanyRepository } from "../repositories/userRepository";

export async function createUserService( user : { name: string, companyId : number } ) {
    const userId = await generateUserId();
    return await createUserRepository( user.name, user.companyId, userId );
};

export async function readUserService( userId : number ) {
    return await readUserRepository( userId );
};

export async function readUserByCompanyService( { companyId } : { companyId : number } ) {
    return await readUsersByCompanyRepository( companyId );
};

export async function deleteUserService( { userId } : { userId : number} ) {
    return await deleteUserRepository(userId);
};