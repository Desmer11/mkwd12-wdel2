import Joi from "joi";

const CategoryDTOValidator = Joi.object({
  category: Joi.string().required(),
  spentAmount: Joi.number().required(),
});

export const BudgetDTOValidator = Joi.object({
  fromPeriod: Joi.number().required(),
  toPeriod: Joi.number().required(),
  totalAmmount: Joi.number().required(),
  currency: Joi.string().required(),
  categories: Joi.array().items(CategoryDTOValidator),
});
