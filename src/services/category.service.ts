import { Number } from 'mongoose';
import CategoryModel from '../models/category.model';
import {TCategory} from '../types/index'


class CategoryService {

  async getCategories( page: number,
    limit: number) {
    const categories = await CategoryModel.find().skip(page).limit(limit);;
    if (!categories) {
      throw new Error('Categories not found');
    }
    return categories;
  };

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

  };

}
export default CategoryService;