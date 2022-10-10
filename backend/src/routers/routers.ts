import { Router } from "express";

import companyRouters from "./companyRouters";
import unitRouters from "./unitRouters";
import userRouters from "./userRouters";

const routers = Router();

routers.use(userRouters);
routers.use(companyRouters);
routers.use(unitRouters);

export default routers;
