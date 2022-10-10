import joi from "joi";

export const createAssetSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(), 
    description: joi.string().required(),
    model: joi.string().required(), 
    health: joi.number().required(), 
    workStatus: joi.string().valid("running", "alerting","stopped").required(), 
    unitId: joi.number().required()
});

export const readAssetSchema = joi.object({
    unitId: joi.number().required()
});

export const updateAssetSchema = joi.object({
    assetId: joi.number().required(),
    name: joi.string().required(),
    image: joi.string().required(), 
    description: joi.string().required(),
    model: joi.string().required(), 
    health: joi.number().required(), 
    workStatus: joi.string().valid("running", "alerting","stopped").required()
});

export const deleteAssetSchema = joi.object({
    assetId: joi.number().required()
});