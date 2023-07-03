const { getProductModel } = require("../dal");

const getCategories = {
  method: "GET",
  path: "/categories",
  handler: async function getCategories(request, h) {
    const Products = await getProductModel();
    const categories = await Products.getCategories();
    return categories;
  },
};

exports.getCategories = getCategories;
