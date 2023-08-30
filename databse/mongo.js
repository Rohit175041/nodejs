const mongoose = require('mongoose');
const databaseName='database'
const url = "mongodb+srv://rohit2:rohit@cluster0.sjwfxza.mongodb.net/database?retryWrites=true&w=majority";

const connection=mongoose.connect(url).then((ans) => {
    console.log("ConnectedSuccessful")
}).catch((err) => {
    console.log("Error in the Connection ")
})

module.exports = connection;