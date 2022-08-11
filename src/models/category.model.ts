import { Schema, model } from 'mongoose';
import { TCategory } from '../types';


const categorySchema = new Schema<TCategory>(
{
     name: { type: String, required: true },
     description: {
      type: String,
      maxlength: [500, "Description can not be more than 500 characters"],
     },
    image: {
      type: String,
      default: "no-photo.jpg",
      required: true
    },
},
{ timestamps: true }
);

export default model('Category', categorySchema);