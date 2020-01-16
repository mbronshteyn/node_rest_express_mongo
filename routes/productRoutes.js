const express = require('express');

const {createProduct, getAllProducts, getProductById} = require('../controller/productController');
const joiSchemaValidations = require('../middleware/joiSchemaValidations');
const productSchema = require('../apiSchema/productSchema');

const router = express.Router();

router.post('/',
    joiSchemaValidations.validateBody(productSchema.createProductSchema),
    createProduct);

router.get('/',
    getAllProducts );

router.get('/:id',
    getProductById );

module.exports = router;