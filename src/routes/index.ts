import express from "express";

import category from "./category.router";
import recipes from "./recipe.router";

const router = express.Router();

router.use("/categories", category);
router.use("/recipes", recipes);

export default router;
