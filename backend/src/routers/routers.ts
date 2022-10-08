import { Router } from "express";

import userRouters from "./userRouters";

const routers = Router();

routers.use(userRouters);

export default routers;
