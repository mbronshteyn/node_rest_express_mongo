const {createProduct, updateProduct, getAllProducts, getProductById } = require('../service/productService');
const {defaultServerResponse} = require('../constants');

module.exports.createProduct = async (req, res) => {
    let response = defaultServerResponse;
    try {
        let product = await createProduct(req.body);
        response = {...response, status: 200, message: 'Product Created Successfully', body: product};
    } catch (error) {
        console.error(error);
        response = {...response, message: error.message, status: error.status};
    }

    res.send(response);
};

module.exports.updateProduct = async (req, res) => {
    let response = defaultServerResponse;
    try {
        let product = await updateProduct( req.params, req.body);
        response = {...response, status: 200, message: 'Product Updated Successfully', body: product};
    } catch (error) {
        console.error(error);
        response = {...response, message: error.message, status: error.status};
    }

    res.send(response);
};

module.exports.getAllProducts = async (req, res) => {
    let response = defaultServerResponse;
    try {
        let products = await getAllProducts();
        response = {...response, status: 200, message: 'Product List', body: products};
    } catch (error) {
        console.error(error);
        response = {...response, message: error.message, status: error.status};
    }
    res.send(response);
};


module.exports.getProductById = async (req, res) => {
    let response = defaultServerResponse;
    try {
        let product = await getProductById( req.params );
        if( product ) {
            response = {...response, status: 200, message: 'Product', body: product};
        } else {
            response = {...response, status: 400, message: 'Not Found' };
        }
    } catch (error) {
        console.error(error);
        response = {...response, message: error.message, status: error.status};
    }

    res.send(response);
};
