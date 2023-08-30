const express = require('express');
const route = express.Router();

route.use((req, resp) => {
    resp.send("404-Page not found");
})

module.exports = route;