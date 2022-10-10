import { Router } from "express";

import { createCompanyController, deleteCompanyController, readCompanyController, updateCompanyController } from "../controllers/companyControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { createCompanySchema, deleteCompanySchema, updateCompanySchema } from "../schemas/companySchemas";

const companyRouters = Router();

companyRouters.post("/company", validateSchema(createCompanySchema), createCompanyController);
companyRouters.get("/company", readCompanyController);
companyRouters.put("/company", validateSchema(updateCompanySchema), updateCompanyController);
companyRouters.delete("/company", validateSchema(deleteCompanySchema), deleteCompanyController);

export default companyRouters;