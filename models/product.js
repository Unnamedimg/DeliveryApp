const {Schema,model} =require('mongoose')
const mongoose = require('mongoose');

const ProductSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    imgsrc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required:true
    }
})
module.exports = model('Product', ProductSchema)