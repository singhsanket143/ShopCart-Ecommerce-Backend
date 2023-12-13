const express = require('express');

const { pingController } = require('../../controllers/ping_controller');

const router = express.Router();


function checkrequest(request, response, next) {
    // next -> next middleware function in line
    console.log("Checcking the request");
    // if everything looks good, we call the next middleware
    next(); //logger

    console.log("Ending check request");
}

function logger(request, response, next) {
    console.log("Logging request");
    // if everything looks good then cann the next middleware

    next(); // authChecker

    console.log("Ending log request");

}

function authChecker(request, response, next) {
    console.log("Auth checked");
    next(); // pingController
    console.log("Ending auth request");

}


router.get('/', checkrequest, logger, authChecker, pingController); // mapping a route to a controller


module.exports = router;