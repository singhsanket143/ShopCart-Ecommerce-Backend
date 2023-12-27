const express = require('express');

const { PingController } = require('../../controllers/index');
const { pingAuthCheck } = require('../../controllers/ping_controller');
const { isLoggedIn } = require('../../middlewares/auth_middlewares');

const { pingCheck } = PingController;

const router = express.Router();


router.get('/', pingCheck); // mapping a route to a controller
router.get('/authping', isLoggedIn, pingAuthCheck);


module.exports = router;