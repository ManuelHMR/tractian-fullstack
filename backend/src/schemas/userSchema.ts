import joi from 'joi';

export const userSchema = joi.object({
  name: joi.string().required(),
  companyId: joi.number().required()
});

export const readUserSchema = joi.object({
    userId: joi.number().required()
});

export const readUserByCompanySchema = joi.object({
    companyId: joi.number().required()
});