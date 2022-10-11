import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import routers from "./routers/routers";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use(express.json());
app.use(routers);
app.use(errorHandler);


export default app;