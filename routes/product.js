const express = require("express");
const routes = express.Router();
const productControler = require("../controller/product");

routes
  .post("/create-product", productControler.createProduct)
  .get("/getProducts", productControler.getProducts)
  .delete("/delete-product/:id", productControler.deletProduct);
module.exports = routes;
