const bookService = require('./bookService.js');
module.exports = (app)=>{

    app.get('/api/books', (req, res)=>{
        bookService.getBooks(req, res);
    });

    app.get('/api/book/:id', (req, res)=>{
        bookService.getBookById(req, res);
    });

    app.post('/api/book', (req, res)=>{
        bookService.insertBook(req, res);
    });

};