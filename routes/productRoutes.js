const express = require('express');

const {createProduct} = require('../controller/productController');
const joiSchemaValidations = require('../middleware/joiSchemaValidations');
const productSchema = require('../apiSchema/productSchema');

const router = express.Router();

router.post('/',
    joiSchemaValidations.validateBody(productSchema.createProductSchema),
    createProduct);

module.exports = router;