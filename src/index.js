const express = require("express");

const connect = require("./configs/db");

const {
  register,
  login,
} = require("./controllers/authController");

const userController = require("./controllers/userController");

const productController = require("./controllers/productController");

const app = express();

app.use(express.json());

app.post(
  "/register",
  register
);
app.post("/login", login);

app.use("/users", userController);

app.use("/products", productController);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listning to port 5000 ");
  } catch (err) {
    console.log(err);
  }
});