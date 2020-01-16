const  Product  = require( '../database/models/productModel');

module.exports.createProduct = async ( serviceData ) => {
    try {
        let product = new Product({...serviceData});
        product = await product.save();
        return product.toObject();
    } catch (error) {
        console.error( error );
        throw error;
    }
};

module.exports.getAllProducts = async ( serviceData ) => {
    try {
        products = await Product.find({});
        const formattedProducts = await products.map( product => {
            return product.toObject();
        })
        return formattedProducts;
    } catch (error) {
        console.error( error );
        throw error;
    }
};