const { Router } = require("express");
const usersRouter = require("./users.routes");
const mealSetRouter = require("./mealSet.routes");
const ingredientsRouter = require("./ingredients.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/meal-set", mealSetRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes;
