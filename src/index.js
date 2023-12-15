const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const mysql = require('mysql2');

const { PORT, DB_NAME, DB_PASS, DB_URL, DB_USER } = require('./config/server_config');

const db = mysql.createConnection({
    host: DB_URL,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})
    

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

   db.connect((err) => {
        if(err) {
            console.log("DB didnt connect");
            console.log(err);
            throw err;
        }
        console.log('DB Connected');
        db.query('Select * from products', (err, result) => {
            if(err) {
                console.log(err);
                throw err;
            }
            console.log(result[0]);
        })
   });



})