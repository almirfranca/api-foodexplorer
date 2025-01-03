const knex = require("../database/knex");

class MealSetController {
  async create(request, response) {
    const { title, description, type, value, ingredients, meal_image } =
      request.body;
    const user_id = request.user.id;

    const [meal_id] = await knex("meal_set").insert({
      title,
      description,
      type,
      value,
      user_id,
      meal_image,
    });

    const ingredientsInsert = ingredients.map((name) => {
      return {
        meal_id,
        name,
        user_id,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    return response.json({ meal_id });
  }

  async update(request, response) {
    const user_id = request.user.id;
    const { id } = request.params;

    const { title, description, type, value, meal_image, ingredients } =
      request.body;

    const meal_set = await knex("meal_set").where({ id }).first();

    if (!meal_set) throw new AppError("Prato não encontrado", 401);

    const mealIngredients = await knex("ingredients")
      .where({ meal_id: id })
      .orderBy("name");

    if (!mealIngredients)
      throw new AppError("Ingredientes não encontrados", 401);

    meal_set.title = title ?? meal_set.title;
    meal_set.type = type ?? meal_set.type;
    meal_set.description = description ?? meal_set.description;
    meal_set.value = value ?? meal_set.value;
    meal_set.meal_image = meal_image ?? meal_set.meal_image;

    await knex("meal_set")
      .update({
        title: meal_set.title,
        type: meal_set.type,
        description: meal_set.description,
        value: meal_set.value,
        meal_image: meal_set.meal_image,
      })
      .where({ id });

    await knex("ingredients").where({ meal_id: id }).delete();

    const ingredientsToInsert = ingredients.map((ingredient) => {
      return {
        meal_id: id,
        user_id: user_id,
        name: ingredient,
      };
    });
    await knex("ingredients").insert(ingredientsToInsert);

    return response.json(meal_set);
  }

  async show(request, response) {
    const { id } = request.params;

    const meal = await knex("meal_set").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ meal_id: id })
      .orderBy("name");

    return response.json({
      ...meal,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("meal_set").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, ingredients } = request.query;

    const meal_set = await knex("meal_set")
      .select("*")
      .whereLike("title", `%${title}%`)
      .orderBy("title");

    return response.json(meal_set);
  }
}

module.exports = MealSetController;
