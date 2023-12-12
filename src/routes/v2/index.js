const express = require('express');

const v2Router = express.Router();

const pingRouterV2 = require('./pingRoutesV2');

// Any new api if we have to introduce we should just register it here if it is
// a V1 api

v2Router.use('/ping', pingRouterV2)


module.exports = v2Router;