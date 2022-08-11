import RecipeModel from '../models/recipe.model';
import CategoryModel from '../models/category.model';
import { TRecipe } from '../types';

class RecipeService {
  async createRecipe(data: TRecipe, category: string) {
    const foundCategory = await CategoryModel.findById(category);
     if (!foundCategory) {
      throw new Error("Can't find item by determine id");
    }
    const recipe = new RecipeModel(data);
    await recipe.save();
    return recipe;
  }
    
    
     async getRecipesInCategory (
     category: String
     ) {
     const recipes = await RecipeModel.find({ category: category });
     return recipes;
    };

       async getRecipeById (recipeId: string) {
       const singleRecipe = await RecipeModel.findById({ _id: recipeId }).populate('category');
       if (!singleRecipe) {
       throw new Error("Can't find item by determine id");
    }
       return singleRecipe;
};

     async updateRecipe(data: TRecipe, recipeId: string) {
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