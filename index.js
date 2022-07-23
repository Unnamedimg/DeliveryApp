const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
//routes
const ShopRouter = require('./routes/shop');
const ShopCartRouter = require('./routes/shopcart.js');
const AdminRouter = require('./routes/admin.js');
const HistoryRouter = require('./routes/history.js');
//configureation
const url = 'mongodb+srv://AdminDelivery:ET-school@deliveryapp.mrlsbml.mongodb.net/products'
const PORT = 3000;


const app =express();
const hbs =handlebars.create({
    defaultLayout:'pattern',
    extname:'hbs'
})
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'static')))
//routes
app.use(ShopRouter);
app.use(ShopCartRouter);
app.use(AdminRouter);
app.use(HistoryRouter);

async function run(){
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT,()=>{
            console.log(`${PORT}: Server started ...`);
        })
    }catch(err){
    console.log(err);
    }
}

run();