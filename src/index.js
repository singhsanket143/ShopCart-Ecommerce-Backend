const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');

const {PORT} = require('./config/server_config');
const ApiRouter = require('./routes/api_router');

const db = require('./config/db_config');


const Category = require('./models/category');

const app = express();

// app.use(responseTime(function f(req, res, time) {
//     console.log("Time elapsed = ", time);
//     res.setHeader('X-Response-Time', time);
// }));
app.use(responseTime());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRouter); // if any req comes with url starting with /api

app.listen(PORT, async () => {
    console.log(`Server for Shopcart is Up ${PORT}`);
    await db.sync();
    console.log('DB Connected');
    // const res = await Category.create({
    //     name: 'Electronics',
    //     description: 'Category for electronic products'
    // });
    // console.log(res);
})