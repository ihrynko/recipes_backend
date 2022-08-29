import { Schema, model, Document } from "mongoose";
import { TRecipe, TIngredients, TInstruction } from "../types";

const ingridientsSchema = new Schema<TIngredients>({
  ingredient: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, required: true },
});

const instructionsSchema = new Schema<TInstruction>({
  value: { type: String, required: true },
  order: { type: Number },
});

const recipeSchema = new Schema<TRecipe>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    ingredients: { type: [ingridientsSchema], required: true },
    instructions: { type: [instructionsSchema], required: true },
  },
  { timestamps: true }
);

export default model("Recipe", recipeSchema);
