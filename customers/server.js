const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MongoDB Connection Setup
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const db_url= 'mongodb+srv://narmada:Password1234@cluster0-jyewa.mongodb.net/test1?retryWrites=true';
const options = {
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 3,
    useNewUrlParser: true
};
mongoose.connect(db_url, options, ()=>{
    console.log("Database is connected..");
}); 

// parse http request body for 'application/json' content type 
app.use(bodyParser.json()); 

// load routes.js 
require('./routes.js')(app);

// start express server 
app.listen(7070, ()=>{
    console.log("Node Server is up and running on port 7070..");
});

// Handle the exceptions which are not handeled at code level
process.on('uncaughtException', (err)=>{
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
});