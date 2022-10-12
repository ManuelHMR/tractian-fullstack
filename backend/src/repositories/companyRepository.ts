import { connectdb } from "../database";

export async function createCompanyRepository ( name: string, companyId: number ) {
    const data = { name, companyId, status: "ok" };
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    return await companyCollection.insertOne(data);
};

export async function readCompanyByIdRepository( companyId : number ){
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    return await companyCollection.findOne({companyId})
};

export async function readCompaniesRepository(){
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    const companies = await companyCollection.find({status: "ok"}).toArray();
    if(companies._eventsCount === 0){
        throw{
            status: 404,
            message: "There is no registered companies!"
        }; 
    };
    return companies;
};

export async function updateCompanyRepository( name: string , companyId: number) {
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    return await companyCollection.updateOne({companyId}, {$set:{name}}); 
};

export async function deleteCompanyRepository( companyId: number ){
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    return await companyCollection.updateOne({companyId}, {$set:{status: "deleted"}}); 
};