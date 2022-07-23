const {Router} = require('express');
const path = require('path');
const Shop = require(path.join(__dirname,'..','models','shop.js'))
const Product = require(path.join(__dirname,'..','models','product.js'))
const router = Router();

router.get('/',async(req,res)=>{
    const products = await Product.find({}).lean();
    const shops = await Shop.find({}).lean();
    res.render('shop',{
        title:'Shop | DeliveryApp',
        products,
        shops
    })
})
router.post('/shop/getproduct',async(req,res)=>{
    const products = await Product.findById(req.body.id).lean();
    res.send(products);
})


module.exports = router;