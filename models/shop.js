const {Schema,model} = require('mongoose');

const ShopSchema =new Schema({
    title:{
        type:String,
        required:true
    }
})
module.exports = model('Shop', ShopSchema)