import { Document } from "mongoose";

export type TCategory = {
  _id?: string;
  name: string;
  description?: string;
  image?: string;
};

export type TRecipe = {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category: TCategory;
  createdAt?: Date;
  updatedAt?: Date;
  ingredients: Array<TIngredients>;
  instructions: TInstruction[];
};

export type TIngredients = {
  ingredient: string;
  amount: number;
  unit: string;
};

export type TInstruction = {
  _id?: string;
  order?: number;
  value: string;
};

export type TQuery = {
  search?: string;
};
