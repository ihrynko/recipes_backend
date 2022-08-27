import { Number } from "mongoose";
import RecipeModel from "../models/recipe.model";
import CategoryModel from "../models/category.model";
import { TCategory } from "../types/index";

class CategoryService {
  async getCategories() {
    const categories = await CategoryModel.find();
    if (!categories) {
      throw new Error("Categories not found");
    }
    return categories;
  }

  async getRecipesInCategory(category: string) {
    const recipes = await RecipeModel.find({ category: category }).populate(
      "category"
    );
    if (recipes) {
      return recipes;
    }
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
