import RecipeModel from '../models/recipe.model';


class CategoryService {
async getCategories() {
  const categories = await RecipeModel.aggregate([
    { $match: {} },
    { $unwind: "$category" },
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
  return categories;
};

async getRecepiesCategory (category: string) {
  const recipes = await RecipeModel.find({ category: category });
  return recipes;
};


async getRecipeInCategory (
  category: String,
  recipeTitle: String
) {
  const foundRecipe = await RecipeModel.find({
    category: category,
    title: { $regex: recipeTitle, $options: "i" },
  });
  return foundRecipe;
};
};


export default CategoryService;