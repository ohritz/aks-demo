const { getProductModel} = require("../dal");

async function getProductsByCategory(request, h) {
    const {categories}  = request.query;
    const query = {
        categories
    };
    const Products = await getProductModel();
    const products = await Products.search(query);
    return products;
}

exports.getProductsByCategory = getProductsByCategory;
