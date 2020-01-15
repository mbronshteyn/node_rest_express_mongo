const { createProduct } = require('../service/productService');
const { defaultServerResponse } = require( '../constants');

module.exports.createProduct = async  ( req, res ) => {
    let response = defaultServerResponse;
    try {
        let product = await createProduct(req.body);
        response = { ...response, status: 200, message: 'Product Created Successfully', body: product };
    } catch (error ) {
        console.error( error );
        response = { ...response, message: error.message, status: error.status };
    }

    res.send( response );
};