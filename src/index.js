const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const responseTime = require('response-time');

const {PORT, DB_ALTER, DB_FORCE, NODE_ENV} = require('./config/server_config');
const ApiRouter = require('./routes/api_router');

const db = require('./config/db_config');
const { syncDbInOrder } = require('./models');

const app = express();

// app.use(responseTime(function f(req, res, time) {
//     console.log("Time elapsed = ", time);
//     res.setHeader('X-Response-Time', time);
// }));
app.use(responseTime());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRouter); // if any req comes with url starting with /api

app.listen(PORT, async () => {
    console.log(`Server for Shopcart is Up ${PORT}`);
    if(NODE_ENV == 'development') {
        if(DB_FORCE == true) {
            await db.sync({ force: true});
        } else if (DB_ALTER == true) {
            await db.sync({ alter: true});
        } else {
            await db.sync();
        }
    }
    if(NODE_ENV == 'production') {
        console.log("Syncing db in order");
        syncDbInOrder();
    }
   
    console.log('DB Connected');

    // const c = await Category.findByPk(2);

    // console.log(c);

    // const p = await c.countProducts();

    // console.log(p);

    // const user = await User.findByPk(16);
    // console.log(user);

    // const cart = await user.getCart();

    // console.log(cart);

    // const cart = await Cart.findByPk(1);
    // const products = await cart.getProducts();
    // console.log(products[0].cart_products);
})