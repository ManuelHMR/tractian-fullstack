import { Router } from "express";

import { createUnitController, deleteUnitController, readUnitsByCompanyController, updateUnitController } from "../controllers/unitControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { createUnitSchema, deleteUnitSchema, readUnitSchema, updateUnitSchema } from "../schemas/unitSchemas";

const unitRouters = Router();

unitRouters.post("/unit", validateSchema(createUnitSchema), createUnitController);
unitRouters.get("/unit", validateSchema(readUnitSchema), readUnitsByCompanyController);
unitRouters.put("/unit", validateSchema(updateUnitSchema), updateUnitController);
unitRouters.delete("/unit", validateSchema(deleteUnitSchema), deleteUnitController);

export default unitRouters;