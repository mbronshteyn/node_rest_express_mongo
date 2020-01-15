const { createProduct } = require('../service/productService');

module.exports.createProduct = async  ( req, res ) => {
    const product = await createProduct( req.body );
    console.log( '=== controller',  product );
    res.send( product );
};