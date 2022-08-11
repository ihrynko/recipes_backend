import express from 'express';
// import pagination from '../middlewares/pagination.middleware';
import RecipeController from '../controllers/recipe.controller';
import RecipeService from '../services/recipe.service'

const recipeRouter = express.Router();
const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

recipeRouter.get(
  '/:category',
  recipeController.getAllRecipesInCategory.bind(recipeController)
);
recipeRouter.get(
  '/:id',
  recipeController.getRecipeById.bind(recipeController)
);
recipeRouter.post(
  '/',
  recipeController.createRecipe.bind(recipeController)
);
// recipeRouter.patch(
//   '/:id',
//   recipeController.updateRecipe.bind(recipeController)
// );
recipeRouter.delete(
  '/:id',
  recipeController.deleteRecipeById.bind(recipeController)
);
recipeRouter.get(
  '/search/:query',
  recipeController.getRecipesBySearch.bind(recipeController)
);

export default recipeRouter;