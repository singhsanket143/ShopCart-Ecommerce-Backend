const express = require('express');

const V1Router = require('./v1/index');
const V2Router = require('./v2/index');


const apiRouter = express.Router();


apiRouter.use('/v1', V1Router);
apiRouter.use('/v2', V2Router)


module.exports = apiRouter;