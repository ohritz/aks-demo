const ProductStatics = {
    findByCategory: async function (categories) {
        const products = await this.find({ category: {$in: categories} });
        return products;
    }
}

exports.ProductStatics = ProductStatics;
