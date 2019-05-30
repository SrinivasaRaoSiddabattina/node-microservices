const customerModel = require('./customerModel.js');

const customersService = {
    
    getCustomerById (req, res) {
        customerModel.findById(req.params.id).then((customer)=>{
            if (customer) {
                res.json(customer);
            } else {
                res.status(400).send({
                    "status": "failure",
                    "message": "No customer found with the given customer ID"
                });
            }
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    getCustomers (req, res) {
        customerModel.find().then((customers)=>{
            res.json(customers);
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    },

    insertCustomer (req, res) {
        let newCustomer = {
            "name": req.body.name,
            "age": req.body.age,
            "address": req.body.address
        };
        let customer = new customerModel(newCustomer);
        customer.save().then((obj)=>{
            res.json({
                "status": "success",
                "message": "New customer with the name '"+obj.name +"' is created successfully.."
            });
        }).catch((err)=>{
            if(err) {
                throw err
            }
        });
    }
};

module.exports = customersService;
