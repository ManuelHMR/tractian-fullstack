import { Router } from "express";

import { createCompanyController } from "../controllers/companyControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { createCompanySchema } from "../schemas/companySchemas";

const companyRouters = Router();

companyRouters.post("/company", validateSchema(createCompanySchema), createCompanyController);
// companyRouters.get();
// companyRouters.put();
// companyRouters.delete();

export default companyRouters;