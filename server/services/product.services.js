const Product = require(`../models/Product`);

module.exports.addProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

module.exports.getProductsService = async (filtering, queries) => {
  const products = await Product.find(filtering)
    .select(queries.fields)
    .sort(queries.sort);
  return products;
};

module.exports.deleteBulkProductsService = async () => {
  const product = await Product.deleteMany({});
  return product;
};


module.exports.updateProductService = async (id, data) => {
  const product = await Product.findByIdAndUpdate({ _id: id }, data);
  return product;
};

module.exports.deleteProductService = async (id) => {
  const product = await Product.findByIdAndDelete({ _id: id });
  return product;
};

module.exports.getCategoryService = async () => {
    const categories = await Product.distinct(`category`);
    return categories;
  };


module.exports.getColorsService = async () => {
    const colors = await Product.distinct(`color`);
    return colors;
  };


module.exports.getStocksService = async () => {
    const stocks = await Product.distinct(`stock`);
    return stocks;
  };


module.exports.getRatingsService = async () => {
    const stocks = await Product.distinct(`rating`);
    return stocks;
  };