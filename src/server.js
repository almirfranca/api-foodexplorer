require("express-async-errors");
require("dotenv/config");

const migrationsRun = require("./database/sqlite/migrations");
const AppEror = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const uploadConfig = require("./configs/upload");
const cors = require("cors");
const cookieParser = require("cookie-parser");

migrationsRun();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://challengefoodexplorer.netlify.app",
    ],
    credentials: true,
  })
);
app.use(routes);
app.use("/meal_image", express.static(uploadConfig.UPLOADS_FOLDER));
app.use((error, request, response, next) => {
  if (error instanceof AppEror) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
