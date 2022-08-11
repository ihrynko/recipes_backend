import RecipeModel from '../models/recipe.model';
import CategoryModel from '../models/category.model';
import { Recipe } from '../types';

class RecipeService {
  async createRecipe(data: Recipe, category: string) {
    const foundCategory = await CategoryModel.findById(category);
     if (!foundCategory) {
      throw new Error("Can't find item by determine id");
    }
    const recipe = new RecipeModel(data);
    await recipe.save();
    return recipe;
  }
    
  async getAllRecipes(){
  const result = await RecipeModel.find().populate('category');
  return result;
  }
    
async getRecipeById (recipeId: string) {
  const singleRecipe = await RecipeModel.findById({ _id: recipeId }).populate('category');
    if (!singleRecipe) {
      throw new Error("Can't find item by determine id");
    }
  return singleRecipe;
};

     async updateRecipe(data: Recipe, recipeId: string) {
      const recipe = await RecipeModel.findById({ _id: recipeId });
      const model = new RecipeModel(recipe);
      model.set(data);
      model.save();
      return model;
  }
    
    async deleteRecipeById  (recipeId: string) {
     const singleRecipe = await RecipeModel.deleteOne({ _id: recipeId });
     return singleRecipe;
  }

    
async getRecipesBySearch (search: string){
  const recipes = await RecipeModel.find({
    title: { $regex: search, $options: "i" },
  });
  return recipes;
};
}

export default RecipeService;