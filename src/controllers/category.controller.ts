import { Request, Response } from "express";
import {
  formatErrorResponse,
  formatSuccessResponse,
} from "../services/http.service";
import CategoryService from "../services/category.service";
const { categorySchema } = require("../middlewares/validation.middleware");

class CategoryController {
  constructor(
    public categoryService: CategoryService = new CategoryService()
  ) {}

  async createCategory(req: Request, res: Response) {
    try {
      await categorySchema.validate(req.body);
      const category = await this.categoryService.createCategory(req.body);
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = await this.categoryService.getCategories();
      return formatSuccessResponse(res, categories);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async getAllRecipesInCategory(req: Request, res: Response) {
    try {
      const recipes = await this.categoryService.getRecipesInCategory(
        req.params.category
      );

      return formatSuccessResponse(res, recipes);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async deleteCategoryById(req: Request, res: Response) {
    try {
      const category = await this.categoryService.deleteCategoryById(
        req.params.id
      );
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }
}

export default CategoryController;
