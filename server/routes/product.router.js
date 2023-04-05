const express = require(`express`);
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct, getCategory, getColors, getStocks, deleteBulkProducts, getRatings } = require("../controllers/product.controller");
const router = express.Router();


router.route(`/`)
.post(addProduct)
.get(getProducts)
.delete(deleteBulkProducts)

router.route(`/categories`)
.get(getCategory)

router.route(`/colors`)
.get(getColors)

router.route(`/stocks`)
.get(getStocks)

router.route(`/ratings`)
.get(getRatings)

router.route(`/:id`)
.get(getProductById)
.patch(updateProduct)
.delete(deleteProduct);


module.exports = router;