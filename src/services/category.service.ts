import CategoryModel from '../models/category.model';
import {Category} from '../types/index'


class CategoryService {
async getCategories() {
  const categories = await CategoryModel.find();
      if (!categories) {
      throw new Error('Categories not found');
      }
  return categories;
};

  async createCategory(data: Category) {
   const category = new CategoryModel(data);
    await category.save();
    return category;
  }
  async getCategoryById (categoryId: string) {
  const singleCategory = await CategoryModel.findById({ _id: categoryId });
    if (!singleCategory) {
      throw new Error("Can't find item by determine id");
    }
  return singleCategory;
};

 async deleteCategoryById (recipeId: string) {
     const category = await CategoryModel.deleteOne({ _id: recipeId });
     return category;
  }

// async getRecepiesCategory (category: string) {
//   const recipes = await RecipeModel.find({ category: category });
//   return recipes;
// };


// async getRecipeInCategory (
//   category: String,
//   recipeTitle: String
// ) {
//   const foundRecipe = await RecipeModel.find({
//     category: category,
//     title: { $regex: recipeTitle, $options: "i" },
//   });
//   return foundRecipe;
// };
// async createCategory(category: string) {
//    const categories = await RecipeModel.aggregate([
//     { $match: {} },
//     { $unwind: "$category" },
//     { $group: { _id: "$category", count: { $sum: 1 } } },
//     // { $sort: { count: -1 } },
//    ]);
//   console.log(categories);
//   categories.push(category);
//   return categories;
//   }

// async getCategories() {
//   const categories = await RecipeModel.aggregate([
//     { $match: {} },
//     { $unwind: "$category" },
//     { $group: { _id: "$category", count: { $sum: 1 } } },
//     { $sort: { count: -1 } },
//   ]);
//   return categories;
// };

// async getRecepiesCategory (category: string) {
//   const recipes = await RecipeModel.find({ category: category });
//   return recipes;
// };


// async getRecipeInCategory (
//   category: String,
//   recipeTitle: String
// ) {
//   const foundRecipe = await RecipeModel.find({
//     category: category,
//     title: { $regex: recipeTitle, $options: "i" },
//   });
//   return foundRecipe;
// };
};


export default CategoryService;