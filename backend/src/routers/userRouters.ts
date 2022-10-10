import { Router } from "express";

import { 
    createUserController,
    readUserController,
    // updateUserController, 
    deleteUserController, 
    readUsersByCompanyController} from "../controllers/userControllers";
import { validateSchema } from "../middlewares/validateSchema";
import { readUserByCompanySchema, readUserSchema, userSchema } from "../schemas/userSchema";

const userRouters = Router();

userRouters.post("/user", validateSchema(userSchema), createUserController);
userRouters.get("/user", validateSchema(readUserSchema), readUserController);
// userRouters.put("/user", updateUserController);
userRouters.delete("/user", validateSchema(readUserSchema), deleteUserController);

userRouters.get("/users", validateSchema(readUserByCompanySchema), readUsersByCompanyController);

export default userRouters;