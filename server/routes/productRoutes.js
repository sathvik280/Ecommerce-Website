const express = require('express');
const productRouter = express.Router();

const verifyToken = require('../middleware/authorizeUser');
const verifyAdmin = require('../middleware/authorizeAdmin');

const {
    createProduct, 
    getAllProducts,
    updateReviews
} = require('../controllers/productController');

productRouter.get('/', verifyToken, getAllProducts);
productRouter.post('/new', verifyAdmin, createProduct);
productRouter.patch('/review', verifyToken, updateReviews);

module.exports = productRouter;