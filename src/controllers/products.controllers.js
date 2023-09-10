const ProductsModels = require("../models/products.models");

const models = new ProductsModels();
const createProducts = async (req, res) => {
  try {
    const { product_name, description, rating } = req.body;
    if (Number(rating) < 1 || Number(rating) > 5)
      throw new Error("Rating Harus Diantara 1 s/d 5");
    const products = await models.create({ product_name, description, rating });
    res.json({
      products,
      oke: "create product",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  const products = await models.getAll();
  res.json({
    products,
    oke: "all product",
  });
};

const getDetailProducts = async (req, res) => {
  const { id } = req.params;
  const product = await models.getById(id);
  res.json({
    product,
    oke: "detail product",
  });
};

const updateSpesificProduct = async (req, res) => {
  const { id } = req.params;
  const { product_name, description } = req.body;
  console.log(req.body);
  const product = await models.edit({ id, product_name, description });
  res.json({
    product,
    oke: "update product",
  });
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const products = await models.delete(id);
  res.json({
    products,
    oke: "delete products",
  });
};
module.exports = {
  createProducts,
  getAllProducts,
  getDetailProducts,
  updateSpesificProduct,
  deleteProducts,
};
