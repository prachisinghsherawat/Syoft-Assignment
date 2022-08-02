const express = require("express");

const router = express.Router();

const Product = require("../models/ProductModel");

const productController = require("../controllers/crudController");

const authenticate = require("../middlewares/authenticate");
const { authorise } = require("../middlewares/authorise");

router.get("", authenticate,authorise,productController(Product).get);

router.post("", authenticate,authorise, productController(Product).post);

router.get("/:id", authenticate,authorise,productController(Product).getOne);

router.patch("/:id", authenticate,authorise, productController(Product).patch);

router.delete("/:id", authenticate,authorise, productController(Product).delete);

module.exports = router;