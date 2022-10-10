import joi from "joi";

export const createCompanySchema = joi.object({
   name: joi.string().required() 
});

export const updateCompanySchema = joi.object({
   name: joi.string().required(),
   companyId: joi.number().required()
});

export const deleteCompanySchema = joi.object({
   companyId: joi.number().required()
});