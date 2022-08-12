import express from 'express';
import pagination from '../middlewares/pagination.middleware';
import CategoryController from '../controllers/category.controller';
import CategoryService from '../services/category.service'

const categoryRouter = express.Router();
const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService);

categoryRouter.get(
  '/',
  pagination,
  categoryController.getCategories.bind(categoryController)
);

categoryRouter.post(
  '/',
  categoryController.createCategory.bind(categoryController)
);
categoryRouter.delete(
  '/:id',
  categoryController.deleteCategoryById.bind(categoryController)
);
categoryRouter.get(
  '/search/:query',
  categoryController.getCategoriesBySearch.bind(categoryController)
);


export default categoryRouter;