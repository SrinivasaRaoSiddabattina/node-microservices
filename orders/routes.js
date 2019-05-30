const orderService = require('./orderService.js');
module.exports = (app)=>{
    
    app.get('/api/orders', (req, res)=>{
        orderService.getOrders(req, res);
    });

    app.get('/api/order/:id', (req, res)=>{
        orderService.getOrderById(req, res);
    });
    
    app.post('/api/order', (req, res)=>{
        orderService.insertOrder(req, res);
    });

};