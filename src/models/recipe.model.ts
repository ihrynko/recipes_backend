import { Schema, model } from 'mongoose';
import { Recipe } from '../types';

const recipeSchema = new Schema<Recipe>(
{
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timeInMins: { type: Number, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    },
  ingredients:  { type: [Object], required: true },
  instructions: { type: [String], required: true },
},
{ timestamps: true }
);



// const recipeSchema = new Schema<Recipe>(
// {
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true },
//   timeInMins: { type: Number, required: true },
//    slug: String,
//   category: {
//     type: Schema.Types.ObjectId,
//     ref: "Category",
//     },
//    user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     },
//     createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//     updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   ingredients:  { type: [Object], required: true },
//   instructions: { type: [String], required: true },
// },
// { timestamps: true }
// );

// recipeSchema.index({ title: 1, user: 1 }, { unique: true });


export default model('Recipe', recipeSchema);

