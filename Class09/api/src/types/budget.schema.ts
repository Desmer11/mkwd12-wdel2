import { Schema, Document, ObjectId } from "mongoose";
import { BudgetEntity } from "../entities/budget.entity";
import { Category } from "./budget.types";

export type BudgetDocument = Document<unknown, {}, BudgetEntity> &
  BudgetEntity & {
    _id: ObjectId;
  } & {
    __v?: number;
  };

const CategorySchema = new Schema<Category>({
  category: { type: String },
  spentAmount: { type: Number },
});

// Schema refers to the object representation that is going to be saved on mongo
// meaning, each object will look as same as the schema
const BudgetSchema = new Schema<BudgetEntity>({
  fromPeriod: { type: Number },
  toPeriod: { type: Number },
  totalAmmount: { type: Number },
  spentAmmount: { type: Number },
  remainingAmmount: { type: Number },
  currency: { type: String },
  categories: [CategorySchema],
});

export default BudgetSchema;
