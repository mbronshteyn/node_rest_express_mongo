const express = require('express');

const {createProduct, getAllProducts} = require('../controller/productController');
const joiSchemaValidations = require('../middleware/joiSchemaValidations');
const productSchema = require('../apiSchema/productSchema');

const router = express.Router();

router.post('/',
    joiSchemaValidations.validateBody(productSchema.createProductSchema),
    createProduct);

router.get('/',
    getAllProducts );

module.exports = router;