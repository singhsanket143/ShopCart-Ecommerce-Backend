const express = require('express');

const { PORT } = require('./config/server_config');

const ApiRouter = require('./routes/api_router');


const app = express();

app.use('/api', ApiRouter); // if any req comes with url starting with /api

app.listen(PORT, () => {
    console.log(`Server for Shopcart is Up ${PORT}`);
})