import { Router } from "express";

import { 
    createUserController,
    readUserController, 
    updateUserController,
    deleteUserController } from "../controllers/userControllers";

const userRouters = Router();

userRouters.post("/user", createUserController);
userRouters.get("/user", readUserController);
// userRouters.put("/user", updateUserController)
// userRouters.delete("/user", deleteUserController)

export default userRouters;