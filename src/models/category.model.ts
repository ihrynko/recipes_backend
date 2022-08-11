import { Schema, model } from 'mongoose';
import { Category } from '../types';


const categorySchema = new Schema<Category>(
{
     name: { type: String, required: true },
     description: {
      type: String,
      maxlength: [500, "Description can not be more than 500 characters"],
     },
    image: {
      type: String,
      default: "no-photo.jpg",
    },
},
{ timestamps: true }
);


// const categorySchema = new Schema<Category>(
// {
//      name: { type: String, required: true },
//      description: {
//       type: String,
//       maxlength: [500, "Description can not be more than 500 characters"],
//      },
//     user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
//     photo: {
//       type: String,
//       default: "no-photo.jpg",
//     },
// },
// { timestamps: true }
// );

// categorySchema.index({ name: 1, user: 1 }, { unique: true });

// categorySchema.virtual("recipies", {
//   ref: "Recipe",
//   localField: "_id",
//   foreignField: "category",
//   justOne: false,
// });


export default model('Category', categorySchema);