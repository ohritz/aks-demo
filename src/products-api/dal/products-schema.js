const { Schema } = require("mongoose");
const { ProductStatics } = require("./products-statics");
const ProductsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    category: String,
    subcategory: String,
    name: String,
    createdOn: Date,
});

ProductsSchema.static(ProductStatics)
