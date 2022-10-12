import { Router } from "express";

import { createCompanyController, deleteCompanyController, readCompanyByIdController, readCompanyController, updateCompanyController } from "../controllers/companyControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { createCompanySchema, deleteCompanySchema, updateCompanySchema } from "../schemas/companySchemas";

const companyRouters = Router();

companyRouters.post("/company", validateSchema(createCompanySchema), createCompanyController);
companyRouters.get("/company", readCompanyController);
companyRouters.get("/company/:companyId", readCompanyByIdController);
companyRouters.put("/company", validateSchema(updateCompanySchema), updateCompanyController);
companyRouters.delete("/company/:companyId", deleteCompanyController);

export default companyRouters;