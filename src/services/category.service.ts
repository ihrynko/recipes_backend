import { Number } from "mongoose";
import RecipeModel from "../models/recipe.model";
import CategoryModel from "../models/category.model";
import { TCategory, TQuery } from "../types/index";

class CategoryService {
  async getCategories(query: TQuery) {
    if (query.search) {
      const categoriesSearch = CategoryModel.find({
        name: { $regex: query.search, $options: "i" },
      });
      return await categoriesSearch;
    }
    const foundRecipes = await CategoryModel.find();
    return foundRecipes;
  }
  async getRecipesInCategory(category: string, query: TQuery) {
    const foundRecipes = await RecipeModel.find({
      category: category,
    }).populate("category");
    if (query.search) {
      const recipesSearch = RecipeModel.find({
        title: { $regex: query.search, $options: "i" },
      });
      return await recipesSearch;
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
}
export default CategoryService;
