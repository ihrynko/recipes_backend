import { Number } from "mongoose";
import RecipeModel from "../models/recipe.model";
import CategoryModel from "../models/category.model";
import { TCategory, TQuery } from "../types/index";

class CategoryService {
  async ghvh() {
    const foundRecipes = await CategoryModel.find();
    return foundRecipes;
  }
  async getCategories(query: TQuery) {
    if (query.search) {
      const categoriesSearch = CategoryModel.find({
        name: { $regex: query.search, $options: "i" },
      });
      return await categoriesSearch;
    }
    const foundRecipes = await CategoryModel.find();
    return foundRecipes;

    // if (!categories) {
    //   throw new Error("Categories not found");
    // }
    // const recipes = await CategoryModel;
    // return recipes;
  }

  // async getRecipesInCategory(category: string) {
  //   const foundRecipes = await RecipeModel.find({
  //     category: category,
  //   }).populate("category");

  //   return foundRecipes;
  // }

  // async getAllRecipesinCategory(category: string) {
  //   const foundRecipes = await RecipeModel.find({
  //     category: category,
  //   });
  //   return foundRecipes;
  // }

  async getRecipesInCategory(category: string, query: TQuery) {
    const foundRecipes = await RecipeModel.find({
      category: category,
    }).populate("category");
    if (query.search) {
      RecipeModel.find({ title: { $regex: query.search, $options: "i" } });
    }
    return foundRecipes;
  }

  async createCategory(data: TCategory) {
    const category = new CategoryModel(data);
    await category.save();
    return category;
  }

  async deleteCategoryById(recipeId: string) {
    const category = await CategoryModel.deleteOne({ _id: recipeId });
    return category;
  }
  async getCategoriesBySearch(search: string) {
    const recipes = await CategoryModel.find({
      name: { $regex: search, $options: "i" },
    });
    return recipes;
  }
}
export default CategoryService;
