const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    toObject: {
        transform: function( doc, ret, options ){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    },
    timestamps: true
});
module.exports = mongoose.model('Product', productSchema);
