const { v4 } = require("uuid");
const db = require("../configs/db");

class ProductsModels {
  tableName = "products";
  constructor() {}
  async getAll() {
    return await db(this.tableName).select("*");
  }

  async create({ product_name, description, rating }) {
    const newProduct = {
      id: v4(),
      product_name,
      description,
      rating,
    };
    await db(this.tableName).insert(newProduct);
    return newProduct;
  }

  async getById(id) {
    console.log({ id });
    const findProducts = await db(this.tableName).where("id", id).first();
    return findProducts;
  }
  async delete(id) {
    try {
      const findProducts = await db(this.tableName).where("id", id).first();
      if (!findProducts?.id) throw new Error("data tidak ada");

      await db(this.tableName).where("id", id).del();
      return findProducts;
    } catch (err) {
      console.log(err);
    }
  }

  async update({ description }) {
    const existingProducts = await db(this.tableName).where("id", id).first();
    if (!existingProducts?.id) throw new Error("data tidak ada");

    const editedProducts = {
      description: description || existingProducts.description,
    };
    await db(this.tableName).update(editedProducts).where("id", id);
    return editedProducts;
  }

  async edit({ id, product_name, description, rating }) {
    const existingProducts = await db(this.tableName).where("id", id).first();
    if (!existingProducts?.id) throw new Error("data tidak ada");
    console.log({ product_name });
    const editedProducts = {
      id: existingProducts.id,
      product_name: product_name || existingProducts.product_name,
      description: description || existingProducts.description,
      rating: rating || existingProducts.rating,
    };
    const result = await db(this.tableName)
      .update(editedProducts)
      .where("id", id)
      .returning("*");
    return result;
  }
}

module.exports = ProductsModels;
