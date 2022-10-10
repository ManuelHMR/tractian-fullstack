import joi from "joi";

export const createUnitSchema = joi.object({
    name: joi.string().required(),
    companyId: joi.string().required()
});

export const readUnitSchema = joi.object({
    companyId: joi.string().required()
});

export const updateUnitSchema = joi.object({
    name: joi.string().required(),
    unitId: joi.string().required()
});

export const deleteUnitSchema = joi.object({
    unitId: joi.string().required()
});