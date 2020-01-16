const Product = require('../database/models/productModel');

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({...serviceData});
        product = await product.save();
        return product.toObject();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports.updateProduct = async ( { id }, serviceData) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: id },
            serviceData,
            { new: true });
        return product.toObject();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports.getAllProducts = async (serviceData) => {
    try {
        products = await Product.find({});
        const formattedProducts = await products.map(product => {
            return product.toObject();
        })
        return formattedProducts;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports.getProductById = async ({id}) => {
    let product = null;
    try {
        product = await Product.findById(id);
        if (product) {
            product = product.toObject();
        }
    } catch (error) {
    }
    return product;
};

module.exports.deleteProductById = async ({id}) => {
    let product = null;
    try {
        product = await Product.findByIdAndDelete(id);
        if (product) {
            product = product.toObject();
        }
    } catch (error) {
    }
    return product;
};
