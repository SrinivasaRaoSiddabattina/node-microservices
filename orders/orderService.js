const orderModel = require('./orderModel.js');
const mongoose = require('mongoose');
const axios = require('axios');

const ordersService = {
    
    getOrderById (req, res) {
        orderModel.findById(req.params.id).then((order)=>{
            if (order) {
                axios.get("http://localhost:7070/api/customer/"+order.customerId).then((customerObj)=>{
                    let responseObj = {};
                    responseObj.customerName = customerObj.data.name;                    
                    axios.get("http://localhost:8080/api/book/"+order.bookId).then((bookObj)=>{
                        responseObj.bookName = bookObj.data.title;
                        res.json(responseObj);
                    });                    
                });
            } else {
                res.status(400).send({
                    "status": "failure",
                    "message": "No order found with the given order ID"
                });
            }
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    getOrders (req, res) {
        orderModel.find().then((orders)=>{
            res.json(orders);
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    insertOrder (req, res) {
        let newOrder = {
            "customerId": mongoose.Types.ObjectId(req.body.customerId),
            "bookId": mongoose.Types.ObjectId(req.body.bookId),
            "startDate": req.body.startDate,
            "endDate": req.body.endDate
        };
        let order = new orderModel(newOrder);
        order.save().then((obj)=>{
            res.json({
                "status": "success",
                "message": "New order created successfully.."
            });
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    }
};

module.exports = ordersService;
