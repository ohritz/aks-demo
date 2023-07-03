const { getProductModel } = require("../dal");

const getProductsByCategory = {
  method: "GET",
  path: "/products",
  handler: async function getProductsByCategory(request, h) {
    const { categories } = request.query;
    const query = {
      categories,
    };
    const Products = await getProductModel();
    const products = await Products.search(query);
    return products.map((p) => p.toJSON());
  },
};

exports.getProductsByCategory = getProductsByCategory;
