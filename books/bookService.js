const booksModel = require('./bookModel.js');

const booksService = {
    
    getBookById (req, res) {
        booksModel.findById(req.params.id).then((book)=>{
            if (book) {
                res.json(book);
            } else {
                res.status(400).send({
                    "status": "failure",
                    "message": "No book found with the given book ID"
                });
            }
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    getBooks (req, res) {
        booksModel.find().then((books)=>{
            res.json(books);
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    insertBook (req, res) {
        let newBook = {
            "title": req.body.title,
            "author": req.body.author,
            "noOfPages": req.body.noOfPages,
            "publisher": req.body.publisher
        };
        let book = new booksModel(newBook);
        book.save().then((obj)=>{
            res.json({
                "status": "success",
                "message": "New book with the title '"+obj.title +"' is created successfully.."
            });
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    }
};

module.exports = booksService;
