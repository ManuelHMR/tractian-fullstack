import { Router } from "express";

import companyRouters from "./companyRouters";
import userRouters from "./userRouters";

const routers = Router();

routers.use(userRouters);
routers.use(companyRouters);

export default routers;
