const mongoose = require('mongoose');
// require('dotenv').config();

const mongodb_URL = process.env.Mongodb_URL;

mongoose.connect(mongodb_URL);
mongoose.connection.on('connected', ()=>{
    console.log('connected Mongo');
});
mongoose.connection.on('error', (err)=>{
    console.log('err mongo');
});