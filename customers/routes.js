const customerService = require('./customerService.js');
module.exports = (app)=>{
    
    app.get('/api/customers', (req, res)=>{
        customerService.getCustomers(req, res);
    });

    app.get('/api/customer/:id', (req, res)=>{
        customerService.getCustomerById(req, res);
    });
    
    app.post('/api/customer', (req, res)=>{
        customerService.insertCustomer(req, res);
    });

};