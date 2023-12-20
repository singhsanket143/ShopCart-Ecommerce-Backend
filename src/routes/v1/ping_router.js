const express = require('express');

const { PingController } = require('../../controllers/index');

const { pingCheck } = PingController;

const router = express.Router();


router.get('/', pingCheck); // mapping a route to a controller


module.exports = router;