const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class MealImageController {
  async update(request, response) {
    const { meal_id } = request.params;
    const mealImageFilaName = request.file.filename;
    const diskStorage = new DiskStorage();

    const mealSet = await knex("meal_set").where({ id: meal_id }).first();

    if (!mealSet) throw new AppError("Prato não encontrado", 401);

    if (mealSet.meal_image) {
      await diskStorage.deleteFile(mealSet.meal_image);
    }

    const fileName = await diskStorage.saveFile(mealImageFilaName);
    mealSet.meal_image = fileName;

    await knex("meal_set").update(mealSet).where({ id: meal_id });

    return response.json(mealSet);
  }
}

module.exports = MealImageController;
