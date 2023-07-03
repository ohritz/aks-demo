const { getProductModel } = require("../dal");

const getProductsById = {
  method: "GET",
  path: "/products/{id}",
  handler: async function getProductsById(request, h) {
    const { id } = request.params;
    const Products = await getProductModel();
    const product = await Products.getOneById(id);
    return product.toJSON();
  },
};

exports.getProductsById = getProductsById;
