const express = require("express");
const bodyParser = require("body-parser")
const route = express.Router();
const userRouter = require('../crud/user');
const authRouter=require('../authent.js/auth');
const nopagefound=require('../404');


// user authentication 
// route.use('/auth',authRouter);

// user crud operation
route.use('/users', userRouter);

// no page found
route.use('/',nopagefound);

module.exports = route;