const {Router} = require('express');
const router = Router();
const Order = require('../models/order');

router.get('/history',(req,res)=>{
    res.render('history',{
        title:'History | DeliveryApp',
    })
})
router.post('/history/searchorder',async (req,res)=>{
    const arr = await Order.find({phone:req.body.phone,email:req.body.email}).lean();
    res.send(arr)
})


module.exports = router;