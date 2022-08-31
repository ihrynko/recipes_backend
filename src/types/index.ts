import { Document } from "mongoose";

export type TCategory = {
  _id?: string;
  name: string;
  user?: TUser;
  description?: string;
  image?: string;
};

export type TRecipe = {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category: TCategory;
  user?: TUser;
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

export type TUser = {
  _id?: string;
  username: string;
  email: string;
  password: string;
  token?: string;
};

export type TUserInput = {
  username: string;
  email: string;
  password: string;
};

export type Context = {
  token?: string;
  user?: Document<unknown, any, TUser> & TUser;
  page?: number;
  limit?: number;
};
