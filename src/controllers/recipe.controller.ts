import { Request, Response } from 'express';
import { formatErrorResponse, formatSuccessResponse } from '../services/http.service';
import RecipeService from '../services/recipe.service';
const {
  recipeSchema,
} = require("../middlewares/validation.middleware");

class RecipeController {
  constructor(public recipeService: RecipeService = new RecipeService()) {}

    
    async createRecipe(req: Request, res: Response) {
    try {
     await recipeSchema.validate(req.body);
      const newRecipe = await this.recipeService.createRecipe(req.body, req.body.category);
      return formatSuccessResponse(res, newRecipe);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
    }
    
    async getRecipeById(req: Request, res: Response) {
    try {
      const recipe = await this.recipeService.getRecipeById(req.params.id);
      return formatSuccessResponse(res, recipe);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
    }
    
    // async updateRecipe(req: Request, res: Response) {
    // try {
    // await recipeSchema.validate(req.body);
    //   const recipe = await this.recipeService.updateRecipe(req.body, req.params.id);
    //   return formatSuccessResponse(res, recipe);
    // } catch (error) {
    //   return formatErrorResponse(res, error);
    // }
    // }
    
    async deleteRecipeById(req: Request, res: Response) {
    try {
      const recipe = await this.recipeService.deleteRecipeById(req.params.id);
      return formatSuccessResponse(res, recipe);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
    }
    
    async getRecipesBySearch(req: Request, res: Response) {
    try {
      const recipe = await this.recipeService.getRecipesBySearch(req.params.query);
      return formatSuccessResponse(res, recipe);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }
}

export default RecipeController;