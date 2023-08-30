//imporant renderserver link
// https://node-js-server-1ejk.onrender.com

const express = require("express");
const bodyParser = require("body-parser")
const connection = require('./databse/mongo');
const roterfile = require('./router/routerfile')
const PORT = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", roterfile);



app.listen(PORT, () => {
    connection
    console.log("server is running on port 5000");
})
