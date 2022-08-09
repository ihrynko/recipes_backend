import express from 'express';
import RecipeController from '../controllers/recipe.controller';
import RecipeService from '../services/recipe.service'

const recipeRouter = express.Router();
const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

recipeRouter.get(
  '/',
  recipeController.getAllRecipes.bind(recipeController)
);
recipeRouter.get(
  '/:id',
  recipeController.getRecipeById.bind(recipeController)
);
recipeRouter.post(
  '/',
  recipeController.createRecipe.bind(recipeController)
);
recipeRouter.patch(
  '/:id',
  recipeController.updateRecipe.bind(recipeController)
);
recipeRouter.delete(
  '/:id',
  recipeController.deleteRecipeById.bind(recipeController)
);
recipeRouter.get(
  '/search/:query',
  recipeController.deleteRecipeById.bind(recipeController)
);

export default recipeRouter;