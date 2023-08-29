const { logger } = require("../app-config/logger");

const ProductStatics = {
  search: async function (queryPararms) {
    const { categories } = queryPararms;
    const query = {};
    if (categories) {
      query.category = { $in: categories.split(",") };
    }

    const products = await this.find(query);
    logger.info(`found ${products.length} products`);
    return products;
  },
  getOneById: async function (id) {
    const product = await this.findOne({ _id: id });
    if (!product) {
      logger.info(`product ${id} not found`);
      return null;
    }
    logger.info(`found product ${product._id}`);
    return product;
  },
  getCategories: async function () {
    const categories = await this.distinct("category");
    logger.info(`found ${categories.length} categories`);
    return categories;
  },
};

exports.ProductStatics = ProductStatics;
