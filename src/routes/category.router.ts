import express from 'express';
import CategoryController from '../controllers/category.controller';
import CategoryService from '../services/category.service'

const categoryRouter = express.Router();
const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService);

categoryRouter.get(
  '/category',
  categoryController.getCategories.bind(categoryController)
);
categoryRouter.get(
  '/:category',
  categoryController.getRecepiesCategory.bind(categoryController)
);
categoryRouter.get(
  '/:categoryName/:query',
  categoryController.getRecipeInCategory.bind(categoryController)
);

export default categoryRouter;