const express = require("express");
const bodyParser = require("body-parser")
const route = express.Router();



// const authRouter=require('../authent.js/auth');
const userRouter = require('../crud/user');

// route.use('/login',authRouter)
route.use('/users', userRouter)


const pagefile=require('../404');
route.use('/',pagefile);

module.exports = route;