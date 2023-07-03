const { getProductsByCategory } = require("./get-products-by-category");
const { getCategories } = require("./get-all-categories");
const { getProductsById } = require("./get-products-by-id");

module.exports = {
  getProductsByCategory,
  getCategories,
  getProductsById,
};
