import express from "express";
import accessTokenMiddleware from '../middlewares/accessToken.middleware';
import category from "./category.router";
import recipes from "./recipe.router";
import auth from './auth.router';

const router = express.Router();

router.use("/auth", accessTokenMiddleware, auth);
router.use("/categories", category);
router.use("/recipes", recipes);

export default router;