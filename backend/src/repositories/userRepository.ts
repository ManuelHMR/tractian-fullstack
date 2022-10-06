import database from "../database";

const userCollection = database.collection("userCollection");

export async function createUser( companyId : number, name : string ) {
    const user = { name, companyId }
    return await userCollection.insert(user)
};

export async function readUser( userId : number ) {
    const user = await userCollection.find({userId});
    if(!user){
        throw{
            status: 404,
            message: "User not found!"
        }
    };
    return user
}; 

export async function updateUser( userId : number ) {
    
};

export async function deleteUser( userId : number ) {
    await userCollection.delete({userId}); 
};