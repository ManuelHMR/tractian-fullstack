import joi from "joi";

export const createCompanySchema = joi.object({
   name: joi.string().required() 
});