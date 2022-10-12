import { Router } from "express";

import { createUnitController, deleteUnitController, readUnitByIdController, readUnitsByCompanyController, updateUnitController } from "../controllers/unitControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { createUnitSchema, deleteUnitSchema, readUnitSchema, updateUnitSchema } from "../schemas/unitSchemas";

const unitRouters = Router();

unitRouters.post("/unit", validateSchema(createUnitSchema), createUnitController);
unitRouters.get("/unit/:unitId", readUnitByIdController);
unitRouters.put("/unit", validateSchema(updateUnitSchema), updateUnitController);
unitRouters.delete("/unit", validateSchema(deleteUnitSchema), deleteUnitController);

unitRouters.post("/units", validateSchema(readUnitSchema), readUnitsByCompanyController);

export default unitRouters;