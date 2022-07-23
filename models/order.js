const {Schema,model} =require('mongoose')
const mongoose = require('mongoose');

const OrderSchema =new Schema({
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    products:{
        type: [],
        required:true
    }
})
module.exports = model('Order', OrderSchema)