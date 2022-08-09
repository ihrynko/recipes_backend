import { Schema, model } from 'mongoose';
import { Recipe } from '../types';

const recipeSchema = new Schema<Recipe>(
{
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timeInMins: { type: Number, required: true },
  category: { type: [String], required: true },
  ingredients:  { type: [Object], required: true },
  instructions: { type: [String], required: true },
},
{ timestamps: true }
);


export default model('Recipe', recipeSchema);