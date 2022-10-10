import { Router } from "express";

import { createAssetController, deleteAssetController, readAssetsByUnitController, updateAssetsController } from "../controllers/assetController";
import { validateSchema } from "../middlewares/validateSchema";
import { createAssetSchema, deleteAssetSchema, readAssetSchema, updateAssetSchema } from "../schemas/assetSchemas";

const assetRouters = Router();

assetRouters.post("/asset", validateSchema(createAssetSchema), createAssetController);
assetRouters.get("/asset", validateSchema(readAssetSchema), readAssetsByUnitController);
assetRouters.put("/asset", validateSchema(updateAssetSchema), updateAssetsController);
assetRouters.delete("/asset", validateSchema(deleteAssetSchema), deleteAssetController);

export default assetRouters;