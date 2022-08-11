import { Request, Response } from 'express';
import { formatErrorResponse, formatSuccessResponse } from '../services/http.service';
import CategoryService from '../services/category.service';

class CategoryController {
  constructor(public categoryService: CategoryService = new CategoryService()) {}

async createCategory(req: Request, res: Response) {
    try {
      const category = await this.categoryService.createCategory(req.body);
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async getCategories(_req: Request, res: Response) {
    try {
      const category = await this.categoryService.getCategories();
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

   async getCategoryById(req: Request, res: Response) {
    try {
      const category = await this.categoryService.getCategoryById(req.params.id);
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }
    

    async deleteCategoryById(req: Request, res: Response) {
    try {
      const category = await this.categoryService.deleteCategoryById(req.params.id);
      return formatSuccessResponse(res, category);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
      }
  //     async getRecepiesCategory(req: Request, res: Response) {
  //   try {
  //     const category = await this.categoryService.getRecepiesCategory(req.params.category);
  //     return formatSuccessResponse(res, category);
  //   } catch (error) {
  //     return formatErrorResponse(res, error);
  //   }
  //     }
    
  //    async getRecipeInCategory(req: Request, res: Response) {
  //   try {
  //     const category = await this.categoryService.getRecipeInCategory(req.params.categoryName, req.params.query);
  //     return formatSuccessResponse(res, category);
  //   } catch (error) {
  //     return formatErrorResponse(res, error);
  //   }
  // }
}

export default CategoryController;