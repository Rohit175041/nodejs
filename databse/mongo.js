const mongoose = require('mongoose');
const databaseName='database'
const url = "mongodb+srv://rohitsingh:rohitsingh123@cluster0.sjwfxza.mongodb.net/nodejs?retryWrites=true&w=majority";

const connection=mongoose.connect(url).then((ans) => {
    console.log("databse Connected Successfully")
}).catch((err) => {
    console.log("Error in databse Connection ")
})

module.exports = connection;