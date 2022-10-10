import joi from "joi";

export const createUnitSchema = joi.object({
    name: joi.string().required(),
    companyId: joi.number().required()
});

export const readUnitSchema = joi.object({
    companyId: joi.number().required()
});

export const updateUnitSchema = joi.object({
    name: joi.string().required(),
    unitId: joi.number().required()
});

export const deleteUnitSchema = joi.object({
    unitId: joi.number().required()
});