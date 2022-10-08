import { connectdb } from "../database";

export async function createUserRepository(  name : string, companyId : number ) {
    const user = { name, companyId };
    const database = await connectdb();
    const userCollection = database.collection("userCollection");
    return await userCollection.insertOne(user);
};

export async function readUserRepository( userId : number ) {
    const database = await connectdb();
    const userCollection = database.collection("userCollection");
    const user = await userCollection.find({userId});
    if(!user){
        throw{
            status: 404,
            message: "User not found!"
        }; 
    };
    return user;
}; 

export async function readUsersByCompanyRepository( companyId : number ) {
    const database = await connectdb();
    const userCollection = database.collection("userCollection");
    const users = await userCollection.find({companyId}).toArray();
    if(users._eventsCount === 0){
        throw{
            status: 404,
            message: "Users not found!"
        }; 
    };
    return users;
}; 

// export async function updateUserRepository( userId : number ) {
    
// };

// export async function deleteUserRepository( userId : number ) {
//     await userCollection.delete({userId}); 
// };