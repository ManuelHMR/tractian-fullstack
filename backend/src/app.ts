import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import routers from "./routers/routers";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routers);
// if (process.env.NODE_ENV === "TEST"){
//     app.use("/tests", testRouter);
//   } 
app.use(errorHandler);

export default app;