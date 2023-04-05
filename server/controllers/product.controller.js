const {
  addProductService,
  getProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
  getCategoryService,
  getColorsService,
  getStocksService,
  deleteBulkProductsService,
  getRatingsService,
} = require("../services/product.services");

//  insert one product

module.exports.addProduct = async (req, res, next) => {
  try {
    const product = await addProductService(req.body);

    res.status(200).json({
      status: `success`,
      message: `data inserted successfully`,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not inserted`,
      error: err.message,
    });
  }
};

// get all products

module.exports.getProducts = async (req, res, next) => {
  try {
    //{price: {$gte: 10000}}
    // { price: { gt: '10000' } } //comes from

    let filters = { ...req.query };

    
    const excludeFields = [`sort`, `page`, `limit`, `skip`, `select`];
    excludeFields.forEach((field) => delete filters[field]);

    // console.log(`original object`, req.query);
    // console.log(`copy object`, filters);

    //gt, lt, gte, lte
    let filterString = JSON.stringify(filters);

    filterString = filterString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );

    filterString = filterString.replace(
      /\b(in|nin)\b/,
      (match) => `$${match}`
    );

    filters = JSON.parse(filterString);

    if(filters.stock){
      filters.stock.$in = filters.stock.$in.split(`,`);
    }

    console.log(filters);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(`,`).join(` `);
      queries.sort = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(`,`).join(` `);
      queries.fields = fields;
    }

    const products = await getProductsService(filters, queries);

    res.status(200).json({
      status: `success`,
      message: `data found successfully`,
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not found`,
      error: err.message,
    });
  }
};



// bulk delete products

module.exports.deleteBulkProducts = async (req, res, next) => {
  try {
    const product = await deleteBulkProductsService();

    res.status(200).json({
      status: `success`,
      message: `products deleted successfully`,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not found`,
      error: err.message,
    });
  }
};



// get one product

module.exports.getProductById = async (req, res, next) => {
  try {
    const product = await getProductByIdService(req.params.id);

    res.status(200).json({
      status: `success`,
      message: `data found successfully`,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not found`,
      error: err.message,
    });
  }
};

// get one product and update

module.exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id,
      data = req.body;
    const product = await updateProductService(id, data);

    res.status(200).json({
      status: `success`,
      message: `data inserted successfully`,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not inserted`,
      error: err.message,
    });
  }
};

// update one api

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await deleteProductService(req.params.id);

    res.status(200).json({
      status: `success`,
      message: `data inserted successfully`,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: `failed`,
      message: `data not inserted`,
      error: err.message,
    });
  }
};


// get categorty names

module.exports.getCategory = async (req, res, next) => {
    try {
      const category = await getCategoryService();
  
      res.status(200).json({
        status: `success`,
        message: `category found`,
        data: category,
      });
    } catch (err) {
      res.status(400).json({
        status: `failed`,
        message: `category not found`,
        error: err.message,
      });
    }
  };
  
module.exports.getColors = async (req, res, next) => {
    try {
      const colors = await getColorsService();
  
      res.status(200).json({
        status: `success`,
        message: `category found`,
        data: colors,
      });
    } catch (err) {
      res.status(400).json({
        status: `failed`,
        message: `category not found`,
        error: err.message,
      });
    }
  };

  
module.exports.getStocks = async (req, res, next) => {
    try {
      const stocks = await getStocksService();
  
      res.status(200).json({
        status: `success`,
        message: `stocks status found`,
        data: stocks,
      });
    } catch (err) {
      res.status(400).json({
        status: `failed`,
        message: `stock status found`,
        error: err.message,
      });
    }
  };

  
module.exports.getRatings = async (req, res, next) => {
    try {
      const ratings = await getRatingsService();
  
      res.status(200).json({
        status: `success`,
        message: `ratings status found`,
        data: ratings,
      });
    } catch (err) {
      res.status(400).json({
        status: `failed`,
        message: `ratings status found`,
        error: err.message,
      });
    }
  };
  