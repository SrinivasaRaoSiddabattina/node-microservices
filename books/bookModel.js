const mongoose = require('mongoose');

const schema = mongoose.Schema;

const booksSchema = new schema({
    "title": {
        type: String,
        require: true
    },
    "author": {
        type: String,
        require: true
    },
    "noOfPages": {
        type: Number,
        require: false
    },
    "publisher": {
        type: String,
        require: false
    }
}, {collection: 'books'});

const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;

