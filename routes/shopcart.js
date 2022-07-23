const {Router} = require('express');
const router = Router();
const Product = require('../models/product');
const Order = require('../models/order');
const ShopCart = require('../modules/shopCart.js');
const Cart = new ShopCart;

router.get('/shopcart', async(req,res)=>{
    const products = Cart.returnArr();
    res.render('shopCart',{
        title:'Shop Cart | DeliveryApp',
        products
    })
})
router.post('/shopCart/addtoshopcart',async (req,res)=>{
const product = await Product.findById(req.body.id).lean();
    Cart.itemPush(req.body.id,product);
    res.redirect('/')
})
router.post('/shopCart/delete',(req,res)=>{
        Cart.itemDelete(req.body.id);
        res.redirect('/shopcart')
    })
router.post('/shopCart/addtoorders',async (req,res)=>{
    const order = new Order({
        address:req.body.address,
        email:req.body.email,
        phone:req.body.phone,
        name:req.body.name,
        totalPrice:req.body.totalPrice,
        date:new Date,
        products:req.body.products
    })
        await order.save()
        console.log(await Order.find({}));
        Cart.itemClean();
        res.redirect('/')
    })

module.exports =router;
module.exports =router;

