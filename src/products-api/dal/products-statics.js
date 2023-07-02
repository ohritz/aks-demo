const ProductStatics = {
    search: async function (queryPararms) {
        const {categories} = queryPararms;
        const query = {};
        if(categories) {
            query.category = {$in: categories.split(",")};
        }

        const products = await this.find(query);
        return products;
    }
}

exports.ProductStatics = ProductStatics;
