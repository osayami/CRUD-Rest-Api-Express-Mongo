const mongoose = require('mongoose')

var userSch=mongoose.Schema({
    _id : {type:mongoose.Schema.Types.ObjectId , auto : true},
    name : {type: String , required:true} , 
    contact: {type: String , required:true} , 
    address : {type: String} ,
},{
    versionKey:false
});

const user = mongoose.model('users', userSch)
module.exports = user;