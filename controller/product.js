const express = require("express");
const Product = require("../models/product");
exports.createProduct = (req, res, next) => {
  console.log(req.body);
  Product.create({
    sellingPrice: req.body.sellingPrice,
    productName: req.body.productName,
  })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deletProduct = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((deletProduct) => {
      res.json(deletProduct);
    })
    .catch((err) => {
      console.log(err);
    });
};
