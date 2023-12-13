const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');


const { PORT } = require('./config/server_config');

const ApiRouter = require('./routes/api_router');


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

app.listen(PORT, () => {
    console.log(`Server for Shopcart is Up ${PORT}`);
})