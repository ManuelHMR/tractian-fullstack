import { connectdb } from "../database";

export async function createCompanyRepository ( name: string, companyId: number ) {
    const data = { name, companyId, status: "ok" };
    const database = await connectdb();
    const companyCollection = database.collection("companyCollection");
    await companyCollection.insertOne(data);
};

