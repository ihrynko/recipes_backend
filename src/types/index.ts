import { Document } from 'mongoose';

export type Ingredients = {
    ingredient: string;
    amount: number;
    unit: string;
};

export type Recipe = {
  _id?: string;
    title: string;
    description: string;
    imageUrl: string;
    timeInMins: number;
    category: Category;
    user?: TUser;
    createdAt?: Date;
    updatedAt?: Date;
    ingredients: Array<Ingredients>;
    instructions: Array<string>;
};

export type Category = {
    _id?: string;
    name: string;
    description?: string;
    user?: TUser;
    image?: string;
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
};