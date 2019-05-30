const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ordersSchema = new schema({
    "customerId": {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    "bookId": {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    "startDate": Date,
    "endDate": Date
}, {collection: 'orders'});

const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = ordersModel;
