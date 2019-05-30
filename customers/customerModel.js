const mongoose = require('mongoose');

const schema = mongoose.Schema;

const customersSchema = new schema({
    "name": {
        type: String,
        require: true
    },
    "age": {
        type: Number,
        require: true
    },
    "address": {
        type: String,
        require: false
    }
}, {collection: 'customers'});

const customersModel = mongoose.model('customers', customersSchema);

module.exports = customersModel;

