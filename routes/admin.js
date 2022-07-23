const {Router} = require('express');
const router = Router();
const path = require('path');
const Shop = require(path.join(__dirname,'..','models','shop.js'))
const Product = require(path.join(__dirname,'..','models','product.js'))

router.get('/admin', async(req,res)=>{
    const shops = await Shop.find({}).lean();
    const products = await Product.find({}).lean();
    res.render('admin',{
        title:'Admin Page | DeliveryApp',
        shops,
        products
    })
})
router.post('/admin/addshop', async (req,res)=>{
    const addShop = new Shop({
        title:req.body.title
    })
    await addShop.save();
    console.log(await Shop.find({}).lean())
    res.redirect('/admin')
})
router.post('/admin/deleteshop', async (req,res)=>{
    await Shop.findByIdAndDelete({_id:req.body.shop})
    console.log(req.body.shop);
    console.log(await Shop.find({}).lean())
    res.redirect('/admin')
})
router.post('/admin/addproduct', async (req,res)=>{
    const addProduct = new Product({
        title:req.body.title,
        imgsrc:req.body.imgsrc,
        text:req.body.text,
        price:req.body.price,
        shop:req.body.shop,
    })
    await addProduct.save();
    console.log(await Product.find({}).lean())
    res.redirect('/admin')
})

router.post('/admin/deleteproduct', async (req,res)=>{
    await Product.findByIdAndDelete({_id:req.body.shop})
    console.log(req.body.shop);
    console.log(await Shop.find({}).lean())
    res.redirect('/admin')
})





module.exports = router;