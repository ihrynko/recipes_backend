
import express from "express";

import category from "./category.router";
import recipe from "./recipe.router";

const router = express.Router();

router.use("/category", category);
router.use("/recipes", recipe);

export default router;