const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/products.controllers");

router.post("/products/create", productsControllers.createProducts);

router.get("/products/all", productsControllers.getAllProducts);

router.get("/products/detail/:id", productsControllers.getDetailProducts);

router.put("/products/update/:id", productsControllers.updateSpesificProduct);

router.delete("/products/delete/:id", productsControllers.deleteProducts);

module.exports = router;
