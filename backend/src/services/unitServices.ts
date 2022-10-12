import { createUnitRepository, deleteUnitRepository, readUnitByIdRepository, readUnitsByCompanyRepository, updateUnitRepository } from "../repositories/unitRepository";
import { generateId } from "../utils/generateId";

export async function createUnitService(unit : { name: string, companyId: number }) {
    const unitId = await generateId("unitCollection");
    return await createUnitRepository(unit.name, unit.companyId , unitId);
};

export async function readUnitByIdService(unitId : number) {
    return await readUnitByIdRepository(unitId);
};

export async function readUnitsByCompanyService (unit: { companyId: number }) {
    return await readUnitsByCompanyRepository(unit.companyId);
};

export async function updateUnitService ( unit : { name: string, unitId: number}) {
    return await updateUnitRepository(unit.name, unit.unitId);
};

export async function deleteUnitService (unit : { unitId: number}) {
    return await deleteUnitRepository( unit.unitId );
};