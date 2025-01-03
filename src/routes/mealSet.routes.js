const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const MealSetController = require("../controllers/MealSetController");
const MealImageController = require("../controllers/MealImageController");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const mealSetRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const mealSetController = new MealSetController();
const mealImageController = new MealImageController();

mealSetRoutes.use(ensureAuthenticated);

mealSetRoutes.post(
  "/",
  verifyUserAuthorization(["admin"]),
  mealSetController.create
);
mealSetRoutes.put(
  "/:id",
  verifyUserAuthorization(["admin"]),
  mealSetController.update
);
mealSetRoutes.get("/:id", mealSetController.show);
mealSetRoutes.delete(
  "/:id",
  verifyUserAuthorization(["admin"]),
  mealSetController.delete
);
mealSetRoutes.get("/", mealSetController.index);
mealSetRoutes.patch(
  "/meal_image/:meal_id",
  upload.single("meal_image"),
  mealImageController.update
);

module.exports = mealSetRoutes;
